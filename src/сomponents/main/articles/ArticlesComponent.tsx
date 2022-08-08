import {ScrollView, StyleSheet} from "react-native";
import ArticleComponent from "./ArticleComponent";

import {observer} from "mobx-react-lite";
import {observe} from "mobx";
import {useEffect, useState} from "react";
import articlesStore from "../../../store/ArticlesStore";




const ArticlesComponent = () => {
    return (
        <ScrollView style={styles.articles}>
            {articlesStore.articles.map((article, index) => <ArticleComponent key={index} title={article.title} description={article.description}/>)}
        </ScrollView>
    );
};

const ArticlesComponentObserver = observer(ArticlesComponent);

const styles = StyleSheet.create({
    articles: {
        flex: 7,
        zIndex: -1,
        paddingLeft: "10%",
        paddingRight: "10%",
    },
});


export default ArticlesComponentObserver;