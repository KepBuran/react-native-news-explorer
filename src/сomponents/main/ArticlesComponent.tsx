import {ActivityIndicator, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View} from "react-native";
import ArticleComponent from "./ArticleComponent";

import {observer} from "mobx-react-lite";
import {FC, ReactElement, useEffect, useMemo, useRef} from "react";
import articlesStore from "../../store/ArticlesStore";
import {Article} from "../../models/Article";
import {ArticlesService} from "../../services/ArticlesService";
import {loadArticles} from "../../api/ArticlesApi";
import {ArticlesBLoC} from "../../BLoCs/ArticlesBLoC";


interface articlesProps {
    navigate: (page:string, article:Article) => void;
}


const ArticlesComponent: FC<articlesProps> = ({navigate}) => {
    const articlesService = useMemo(() => new ArticlesService(loadArticles), []);
    const BLoC: ArticlesBLoC = useMemo(() => {return new ArticlesBLoC(articlesService)}, []);
    const scrollRef = useRef(null);

    useEffect( () => {
            // @ts-ignore
            scrollRef.current.scrollTo({ x: 0, y: BLoC.scrollPosition, animated: false });
            BLoC.scrollPosition = 0;
        },[articlesStore.articles]);

    const checkConditions = (): ReactElement => {
        if (articlesStore.loading)
            return <ActivityIndicator size="large" style={styles.loading}></ActivityIndicator>

        if (articlesStore.error)
            return <ErrorArticlesComponent/>

        return <ValidArticlesComponent navigate={navigate}/>
    };

    return (
        <ScrollView style={styles.articles}  ref={scrollRef}
                    onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => BLoC.uploadMore(event.nativeEvent)}>
            {checkConditions()}
        </ScrollView>
    );
};

const ValidArticlesComponent: FC<articlesProps> = ({navigate}) => {
    return (
        <View>
            <Text style={styles.articlesAmount}> Articles found: {articlesStore.articlesAmount} </Text>
            {articlesStore.articles.map((article, index) => <ArticleComponent key={index} navigate={navigate} article={article}/>)}
        </View>
    )
};

const ErrorArticlesComponent = () => {
    return (<>
        <Text style={styles.errorTitle}>SearchError:</Text>
        <Text style={styles.errorMessage}>{articlesStore.error}</Text>
    </>);
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
        fontFamily: "Regular",
        marginBottom: 20
    },

    errorMessage: {
        fontFamily: "Regular",
        lineHeight: 30,
        textAlign: "center",
        fontSize: 24,
        color: "#020200"
    },

    errorTitle: {
        marginTop: 40,
        fontFamily: "SemiBold",
        textAlign: "center",
        fontSize: 48,
        color: "#d20000"
    },

    loading: {
        marginTop: 40,
        height: 100,
        width: 100,
    }
});


export default observer(ArticlesComponent);