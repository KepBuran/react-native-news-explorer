import {ArticlesService} from "../services/ArticlesService";
import {makeAutoObservable, makeObservable, observable, runInAction} from "mobx";
import {SortBy} from "../models/SortBy";
import {SearchParameters, defaultSearchParameters} from "../models/SearchParameters";

export class SearchBLoC {
    apiKey: string;
    keyWords: string;
    fromDate: Date;
    toDate: Date;
    sortBy: SortBy;
    pageSize: number;


    constructor(private readonly articlesService: ArticlesService) {
        makeAutoObservable(this);
        console.log("CONSTRUCTOR SEARCH BLOC")
        this.apiKey = defaultSearchParameters.apiKey;
        this.keyWords = defaultSearchParameters.keyWords;
        this.fromDate = defaultSearchParameters.fromDate;
        this.toDate = defaultSearchParameters.toDate;
        this.sortBy = defaultSearchParameters.sortBy;
        this.pageSize  = defaultSearchParameters.pageSize;
    }

    setKeyWords(keyWords: string) {
        runInAction(() => this.keyWords = keyWords);
    }

    setSortByHandler(sortBy: string) {
        console.log("sortBy value",sortBy);
        runInAction(() => this.sortBy = sortBy);
    }

    searchArticles() {
        this.articlesService.searchArticles(this.buildSearchParameters());
    }

    buildSearchParameters() : SearchParameters {
        console.log("Building parameters: this._sortBy="+this.sortBy)

        return {
            apiKey: this.apiKey,
            fromDate: this.fromDate,
            toDate: this.toDate,
            keyWords: this.keyWords,
            pageSize: this.pageSize,
            sortBy: this.sortBy,
        }
    }



}