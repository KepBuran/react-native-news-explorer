import articlesStore from "../store/ArticlesStore";
import {loadArticles, ILoadArticles} from "../api/ArticlesApi";
import {runInAction} from "mobx";
import {ErrorArticlesResponse} from "../models/ErrorArticlesResponse";
import {SearchParameters, defaultSearchParameters} from "../models/SearchParameters";
import {ArticlesResponse} from "../models/ArticlesResponse";




export class ArticlesService {
    constructor(private readonly loadArticles: ILoadArticles) {}


    saveData(response: ErrorArticlesResponse | ArticlesResponse) {
        runInAction(() => {
            if ('message' in response) {
                articlesStore.error = response.message;
                articlesStore.loading = false;
                return;
            }
            articlesStore.error = "";
            articlesStore.articlesAmount = response.totalResults;
            articlesStore.articles = response.articles;
            articlesStore.loading = false;
        });
    }

    updateData(response: ErrorArticlesResponse | ArticlesResponse) {
        runInAction(() => {
            if ('message' in response) {
                articlesStore.error = response.message;
                articlesStore.loading = false;
                articlesStore.page = 1;
                return;
            }
            articlesStore.error = "";
            articlesStore.articles = articlesStore.articles.concat(response.articles);
            articlesStore.page = 1;
            articlesStore.loading = false;
        });
    }


    async updateArticles(parameters: SearchParameters = defaultSearchParameters) {
        articlesStore.loading = true;
        articlesStore.prevParameters = parameters

        await loadArticles(this.buildParametersRequest(parameters))
            .then(response => {
                this.saveData(response);
            }).catch(err => {
                runInAction(() => {
                    articlesStore.error = "Unknown error. Check your internet connection and try again";
                });
            });

    }


    async searchArticles(parameters: SearchParameters = defaultSearchParameters) {
        let deepEqual = require('deep-equal');
        if (deepEqual(articlesStore.prevParameters, parameters)) return;
        await this.updateArticles(parameters);
    }


    async uploadMoreArticles() {
        articlesStore.loading = true;
        let parametersString = this.buildParametersRequest(articlesStore.prevParameters);
        articlesStore.page += 1;
        parametersString += "&page="+articlesStore.page;

        await loadArticles(parametersString)
            .then(response => {
                this.updateData(response);
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