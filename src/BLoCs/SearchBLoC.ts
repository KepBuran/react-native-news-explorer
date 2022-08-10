import {ArticlesService} from "../services/ArticlesService";
import {makeAutoObservable, makeObservable, observable, runInAction} from "mobx";
import {SortBy} from "../models/SortBy";
import {SearchParameters, defaultSearchParameters} from "../models/SearchParameters";

export class SearchBLoC {
    private readonly _apiKey: string;
    private _keyWords: string;
    private _fromDate: Date;
    private _toDate: Date;
    private _sortBy: SortBy;
    private readonly _pageSize: number;

    constructor(private readonly articlesService: ArticlesService) {
        console.log("CONSTRUCTOR SEARCH BLOC")
        this._apiKey = defaultSearchParameters.apiKey;
        this._keyWords = defaultSearchParameters.keyWords;
        this._fromDate = defaultSearchParameters.fromDate;
        this._toDate = defaultSearchParameters.toDate;
        this._sortBy = defaultSearchParameters.sortBy;
        this._pageSize  = defaultSearchParameters.pageSize;
        makeAutoObservable(this);
    }

    searchArticles() {
        this.articlesService.searchArticles(this.buildSearchParameters());
    }

    buildSearchParameters() : SearchParameters {
        return {
            apiKey: this._apiKey,
            fromDate: this._fromDate,
            toDate: this._toDate,
            keyWords: this._keyWords,
            pageSize: this._pageSize,
            sortBy: this._sortBy,
        }
    }


    setKeyWordsHandler(keyWords: string) {
        console.log("keyWords value",keyWords);
        runInAction(() => this._keyWords = keyWords);
    }

    setSortByHandler(sortBy: SortBy) {
        runInAction(() => this._sortBy = sortBy);
    }

    setFromDateHandler(fromDate: Date | undefined) {
        if (fromDate)
            runInAction(() => this._fromDate = fromDate);
    }

    setToDateHandler(toDate: Date | undefined) {
        if (toDate)
            runInAction(() => this._toDate = toDate);
    }

    get keyWords(): string {
        return this._keyWords;
    }

    get fromDate(): Date {
        return this._fromDate;
    }

    get toDate(): Date {
        return this._toDate;
    }

    get sortBy(): SortBy {
        return this._sortBy;
    }



}