import {SortBy} from "./SortBy";

export interface SearchParameters {
    apiKey: string,
    keyWords: string,
    fromDate: Date,
    toDate: Date,
    sortBy: SortBy,
    pageSize: number

}

const getMonthAgoDate = (date: Date): Date => new Date(date.setMonth(date.getMonth()-1));

export const defaultSearchParameters: SearchParameters = {
    apiKey: "3c6b7d2d68004aa7aa49219ed2eda2be",
    keyWords: "Ukraine",
    fromDate: getMonthAgoDate(new Date()),
    toDate: new Date(),
    sortBy: SortBy.popularity,
    pageSize: 40
}