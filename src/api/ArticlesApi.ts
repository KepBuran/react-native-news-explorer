import {ArticlesResponse} from "../models/ArticlesResponse";
import {ErrorArticlesResponse} from "../models/ErrorArticlesResponse";


export interface ILoadArticles {
    (parameters: string): Promise<ErrorArticlesResponse | ArticlesResponse>
}

export const loadArticles: ILoadArticles = async (parameters: string) => {
        const domain: string = "https://newsapi.org/v2/everything";
        let url: string = domain+parameters;
        console.log(url);

        let response = await fetch(url);

        if(!response.ok) {
            return await response.json() as ErrorArticlesResponse;
        }

        let objectResponse = await response.json();
        return objectResponse as ArticlesResponse;
}

