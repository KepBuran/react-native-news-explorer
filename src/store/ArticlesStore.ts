import {makeAutoObservable} from "mobx";
import {Article} from "../models/Article";
import {ArticlesService} from "../services/ArticlesService";
import {defaultSearchParameters, SearchParameters} from "../models/SearchParameters";



class ArticlesStore {

    private _articlesAmount = 0;
    private _articles: Article[] = [];
    private _prevParameters: SearchParameters;
    private _page: number;
    private _error: String;
    private _loading: boolean;

    constructor() {
        this._articles = [];
        this._error = "";
        this._page = 1;
        this._prevParameters = defaultSearchParameters;
        this._articlesAmount = this.articles.length;
        this._loading = false;
        makeAutoObservable(this);
    }


    get articlesAmount(): number {
        return this._articlesAmount;
    }

    set articlesAmount(value: number) {
        this._articlesAmount = value;
    }


    get error(): String {
        return this._error;
    }

    set error(value: String) {
        this._error = value;
    }

    get articles(): Article[] {
        return this._articles;
    }

    set articles(value: Article[]) {
        this._articles = value;
    }


    get loading(): boolean {
        return this._loading;
    }

    set loading(value: boolean) {
        this._loading = value;
    }

    get page(): number {
        return this._page;
    }

    set page(value: number) {
        this._page = value;
    }


    get prevParameters(): SearchParameters {
        return this._prevParameters;
    }

    set prevParameters(value: SearchParameters) {
        this._prevParameters = value;
    }
}

export default new ArticlesStore();