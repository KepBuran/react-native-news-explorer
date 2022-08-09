import {ArticlesService} from "../services/ArticlesService";
import {makeAutoObservable} from "mobx";

export class SearchBLoC {

    constructor(private readonly articlesService: ArticlesService) {
        makeAutoObservable(this);
    }

    searchArticles() {
        this.articlesService.searchArticles();
    }

}