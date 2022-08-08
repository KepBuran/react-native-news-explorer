import {ArticlesService} from "../services/ArticlesService";

export class SearchBlock {
    private _articlesService : ArticlesService;

    get articlesService(): ArticlesService {
        return this._articlesService;
    }

    constructor(articlesService: ArticlesService) {
        this._articlesService = articlesService;
    }

    searchArticles() {
        console.log("Search ArticleService = "+this);
        this.articlesService.searchArticles();
    }

}