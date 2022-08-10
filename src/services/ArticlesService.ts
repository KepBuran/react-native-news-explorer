import articlesStore from "../store/ArticlesStore";
import {loadArticles, ILoadArticles} from "../api/ArticlesApi";
import {runInAction} from "mobx";
import {ErrorArticlesResponse} from "../models/ErrorArticlesResponse";
import {SearchParameters, defaultSearchParameters} from "../models/SearchParameters";


export class ArticlesService {
    constructor(private readonly loadArticles: ILoadArticles) {}

    async searchArticles(parameters: SearchParameters = defaultSearchParameters) {
        await loadArticles(this.buildParametersRequest(parameters))
             .then(response => {
                 if (response) {
                     runInAction(() => {
                         if ('message' in response) {
                             console.log("Error", response.message)
                             articlesStore.error = response.message;
                             return;
                         }
                         articlesStore.error = "";
                         articlesStore.articlesAmount = response.totalResults;
                         console.log(response);
                         articlesStore.articles = response.articles;
                     })
                     return;
                 }
                 runInAction(() => {
                     articlesStore.articlesAmount = 0;
                     articlesStore.articles = [];
                 })
             }).catch(err => {
                runInAction(() => {
                    articlesStore.error = "Unknown error. Check your internet connection and try again";
                });
            });
    }


    buildParametersRequest(parameters: SearchParameters): string {
        let parametersReq: string = "?";
        parametersReq += "apiKey="+parameters.apiKey;
        parametersReq += parameters.sortBy ? "&sortBy="+parameters.sortBy : "";
        parametersReq += parameters.keyWords ? "&q="+parameters.keyWords : "";
        parametersReq += parameters.fromDate ? "&from="+parameters.fromDate.toJSON().slice(0, 10) : "";
        parametersReq += parameters.toDate ? "&to="+parameters.toDate.toJSON().slice(0, 10) : "";
        parametersReq += parameters.pageSize ? "&pageSize="+parameters.pageSize : "";
        return parametersReq;
    }

}