import {ArticlesResponse} from "../models/ArticlesResponse";


export class ArticlesApi {
    constructor() {

    }

    loadArticles(): Promise<void | ArticlesResponse> {
        let url: string = "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&pageSize=5&apiKey=3c6b7d2d68004aa7aa49219ed2eda2be";

        return fetch(url).then(response => response)
            .then(response => response.json())
            .then(data => data as ArticlesResponse)
            .catch(err => console.log(err));
    }

}