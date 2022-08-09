import {Article} from "../models/Article";
import {makeAutoObservable} from "mobx";
import {SortBy} from "../models/SortBy";


class SearchParametersStore {
    //TODO extract
    private _apiKey: string = "3c6b7d2d68004aa7aa49219ed2eda2be";
    private _keyWords: string = "";
    private _fromDate: string = "";
    private _toDate: string = "";
    private _sortBy: SortBy = SortBy.popularity;
    private _pageSize: number = 40;


    constructor() {
        makeAutoObservable(this);
    }


    buildParametersRequest(): string {
        let parameters: string = "?";
        parameters += "apiKey="+this.apiKey;
        parameters += this.sortBy ? "&sortBy="+this.sortBy : "";
        parameters += this.keyWords ? "&q="+this.keyWords : "";
        parameters += this.fromDate ? "&from="+this.fromDate : "";
        parameters += this.toDate ? "&to="+this.toDate: "";
        parameters += this.pageSize ? "&pageSize="+this.pageSize : "";
        parameters += "&domains=bbc.co.uk";
        return parameters;
    }


    get apiKey(): string {
        return this._apiKey;
    }

    set apiKey(value: string) {
        this._apiKey = value;
    }

    get keyWords(): string {
        return this._keyWords;
    }

    set keyWords(value: string) {
        this._keyWords = value;
    }

    get fromDate(): string {
        return this._fromDate;
    }

    set fromDate(value: string) {
        this._fromDate = value;
    }

    get toDate(): string {
        return this._toDate;
    }

    set toDate(value: string) {
        this._toDate = value;
    }

    get sortBy(): SortBy {
        return this._sortBy;
    }

    set sortBy(value: SortBy) {
        this._sortBy = value;
    }

    get pageSize(): number {
        return this._pageSize;
    }

    set pageSize(value: number) {
        this._pageSize = value;
    }
}

export default new SearchParametersStore();