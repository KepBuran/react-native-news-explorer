import {Article} from "./Article";

export interface ArticlesResponse{
    status: string,
    totalResult: number,
    articles: Article[]
}