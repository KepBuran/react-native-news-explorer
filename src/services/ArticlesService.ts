import articlesStore from "../store/ArticlesStore";
import searchParametersStore from "../store/SearchParametersStore";
import {loadArticles, ILoadArticles} from "../api/ArticlesApi";
import {runInAction} from "mobx";
import {ArticlesResponse} from "../models/ArticlesResponse";


export class ArticlesService {

    constructor(private readonly loadArticles: ILoadArticles) {}

    searchArticles() {
         loadArticles(searchParametersStore.buildParametersRequest())
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

}