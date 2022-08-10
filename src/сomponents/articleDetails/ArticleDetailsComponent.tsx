import React, {FC, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from "react-native";

import {NavigationProp, Route} from "@react-navigation/native";
import {Article} from "../../models/Article";
import {ColorPalette} from "../ColorPalette";



interface articleDetailsProps {
    navigation: NavigationProp<any>,
    route: Route<any, Article>;
}


const ArticleDetailsComponent: FC<articleDetailsProps> = ({route, navigation}) => {
    const article = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: article.title,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerText,
        });

    }, []);

    const checkAuthor = (author: string): string => author === null ? "Unknown" : author;


    return (
        <View style={styles.article}>
            <Image source={{uri: article.urlToImage}} resizeMode='cover' style={styles.articleImage}
            ></Image>
            <View style={styles.articleText}>
                <Text style={styles.articleInfo}>Author: {checkAuthor(article.author)}</Text>
                <Text style={styles.articleInfo}>Source: {article.source.name}</Text>
                <Text style={styles.articleDescription}>{article.description}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        backgroundColor: ColorPalette.Burgundy,
        height: 100
    },

    headerText: {
        color: ColorPalette.SoftWhite,
        fontFamily: "SemiBold",
        fontSize: 18
    },

    article: {
        flex: 1,
        backgroundColor: ColorPalette.SoftWhite,
    },

    articleText: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: "5%"
    },

    articleInfo: {
        textAlign: "right",
        width: "100%",
        fontFamily: "SemiBold",
        fontSize: 16,
        color: ColorPalette.Black
    },

    articleDescription: {
        marginTop: 10,
        width: "100%",
        fontFamily: "Regular",
        fontSize: 14,
        textAlign: "justify",
        lineHeight: 25,
        color: ColorPalette.Black
    },

    articleImage: {
        marginBottom: 10,
        height: 250,
        width: "100%",
        backgroundColor: "#000"
    }


});

export default ArticleDetailsComponent;