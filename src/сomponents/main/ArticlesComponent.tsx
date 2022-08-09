import {ScrollView, StyleSheet, Text} from "react-native";
import ArticleComponent from "./ArticleComponent";

import {observer} from "mobx-react-lite";
import {observe} from "mobx";
import {useEffect, useState} from "react";
import articlesStore from "../../store/ArticlesStore";
import {ArticlesService} from "../../services/ArticlesService";


const ArticlesComponent = observer(() => {
    return (
        <ScrollView style={styles.articles}>
            <Text style={styles.articlesAmount}> Articles found: {articlesStore.articlesAmount}</Text>
            {articlesStore.articles.map((article, index) => <ArticleComponent key={index} title={article.title} description={article.description}/>)}
        </ScrollView>
    );
});

// const ArticlesComponentObserver = observer(ArticlesComponent);

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


export default ArticlesComponent;