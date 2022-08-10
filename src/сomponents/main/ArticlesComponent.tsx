import {ScrollView, StyleSheet, Text, View} from "react-native";
import ArticleComponent from "./ArticleComponent";

import {observer} from "mobx-react-lite";
import {FC, ReactElement} from "react";
import articlesStore from "../../store/ArticlesStore";
import {Article} from "../../models/Article";


interface articlesProps {
    navigate: (page:string, article:Article) => void;
}


const ArticlesComponent: FC<articlesProps> = ({navigate}) => {
    const checkConditions = (): ReactElement => {
        if (articlesStore.error)
            return <ErrorArticlesComponent/>
        return <ValidArticlesComponent navigate={navigate}/>

    }

    return (
        <ScrollView style={styles.articles}>
            {checkConditions()}
        </ScrollView>
    );
};

const ValidArticlesComponent: FC<articlesProps> = ({navigate}) => {
    return (
        <View>
            <Text style={styles.articlesAmount}> Articles found: {articlesStore.articlesAmount} </Text>
            {articlesStore.articles.map((article, index) => <ArticleComponent key={article.url} navigate={navigate} article={article}/>)}
        </View>
    )
};

const ErrorArticlesComponent = () => {
    return (<Text style={styles.errorMessage}>{articlesStore.error}</Text>);
}


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
    },

    errorMessage: {
        marginTop: 40,
        fontFamily: "SemiBold",
        textAlign: "justify",
        fontSize: 24,
        color: "#980000"
    }
});


export default observer(ArticlesComponent);