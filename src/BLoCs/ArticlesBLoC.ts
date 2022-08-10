import {NativeScrollEvent} from "react-native";
import {ArticlesService} from "../services/ArticlesService";
import articlesStore from "../store/ArticlesStore";

export class ArticlesBLoC {

    private _scrollPosition: number;

    constructor(private readonly articlesService: ArticlesService) {
        console.log("CONSTRUCTOR ArticlesBLoC")
        this._scrollPosition = 0;
    }

    isCloseToBottom = (event: NativeScrollEvent) => {
        const paddingToBottom = 20;

        return (event.layoutMeasurement.height + event.contentOffset.y >=
            event.contentSize.height - paddingToBottom) && !articlesStore.loading;
    };

    uploadMore = (event: NativeScrollEvent) => {
        if (this.isCloseToBottom(event)) {
            this.scrollPosition = event.contentOffset.y;
            this.articlesService.uploadMoreArticles();
        }
    }


    get scrollPosition(): number {
        return this._scrollPosition;
    }

    set scrollPosition(value: number) {
        this._scrollPosition = value;
    }
}