export interface Article{
    title: string;
    description: string;
    urlToImage: string;
    author: string;
    source: {id: number, name: string};
    publishedAt: string;
    url: string;
}
