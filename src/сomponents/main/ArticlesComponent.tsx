import {ScrollView, StyleSheet, Text} from "react-native";
import ArticleComponent from "./ArticleComponent";

import {observer} from "mobx-react-lite";
import {FC} from "react";
import articlesStore from "../../store/ArticlesStore";
import {Article} from "../../models/Article";


interface articlesProps {
    navigate: (page:string, article:Article) => void;
}


const ArticlesComponent: FC<articlesProps> = ({navigate}) => {
    return (
        <ScrollView style={styles.articles}>
            <Text style={styles.articlesAmount}> Articles found: {articlesStore.articlesAmount}</Text>
            {articlesStore.articles.map((article, index) => <ArticleComponent key={article.url} navigate={navigate} article={article}/>)}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    articles: {
        flex: 7,
        zIndex: -1,
        paddingLeft: "10%",
        paddingRight: "10%",
    },

    articlesAmount: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: "Light",
        marginBottom: 20
    }
});


export default observer(ArticlesComponent);