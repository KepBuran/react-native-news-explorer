import articlesStore from "../store/ArticlesStore";
import {loadArticles, ILoadArticles} from "../api/ArticlesApi";
import {runInAction} from "mobx";
import {SearchParameters, defaultSearchParameters} from "../models/SearchParameters";


export class ArticlesService {
    constructor(private readonly loadArticles: ILoadArticles) {}

    searchArticles(parameters: SearchParameters = defaultSearchParameters) {
        loadArticles(this.buildParametersRequest(parameters))
             .then(articlesResponse => {
                 if (articlesResponse) {
                     runInAction(() => {
                         articlesStore.articlesAmount = articlesResponse.totalResults;
                         console.log(articlesResponse);
                         articlesStore.articles = articlesResponse.articles;
                     })
                     return;
                 }
                 runInAction(() => {
                     articlesStore.articlesAmount = 0;
                     articlesStore.articles = [];
                 })
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