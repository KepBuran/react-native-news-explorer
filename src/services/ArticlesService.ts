import articlesStore from "../store/ArticlesStore";
import {ArticlesApi} from "../api/ArticlesApi";


export class ArticlesService {

    searchArticles() {
         new ArticlesApi().loadArticles()
             .then(articlesResponse => articlesStore.articles = articlesResponse ? articlesResponse.articles : []);
    }

}