import {ArticlesResponse} from "../models/ArticlesResponse";

export interface ILoadArticles {
    (parameters: string): Promise<void | ArticlesResponse>
}

export const loadArticles: ILoadArticles = (parameters: string) => {
        const domain: string = "https://newsapi.org/v2/everything";
        let url: string = domain+parameters;
        console.log(url);

        return fetch(url).then(response => response)
            .then(response => response.json())
            .then(data => data as ArticlesResponse)
            .catch(err => console.log(err));
}

