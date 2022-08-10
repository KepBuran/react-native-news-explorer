import {makeAutoObservable} from "mobx";
import {Article} from "../models/Article";
import {ArticlesService} from "../services/ArticlesService";



class ArticlesStore {
    private _articlesAmount = 0;
    private _articles: Article[] = [];
    private _error: String;

    constructor() {
        this._articles = [];
        this._error = "";
        this._articlesAmount = this.articles.length;
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
}

export default new ArticlesStore();