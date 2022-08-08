import {makeAutoObservable} from "mobx";

interface Article{
    title: string;
    description: string;
}

interface ArticleResponse{
    status: string,
    totalResult: number,
    articles: Article[]
}

class ArticlesStore {

    private _articlesAmount = 0;
    private _articles: Article[] = [];

    constructor() {
        makeAutoObservable(this);
        this._articles = [
            {
                title: "initTitle",
                description: "initDescription"
            },
        ]
        this._articlesAmount = this.articles.length;
    }


    get articlesAmount(): number {
        return this._articlesAmount;
    }

    set articlesAmount(value: number) {
        this._articlesAmount = value;
    }


    get articles(): Article[] {
        return this._articles;
    }

    set articles(value: Article[]) {
        this._articles = value;
    }
}

export default new ArticlesStore();