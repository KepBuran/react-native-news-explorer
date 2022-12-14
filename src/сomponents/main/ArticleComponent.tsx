import React, {FC, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ColorPalette} from "../ColorPalette";
import {Article} from "../../models/Article";

interface props {
    article: Article,
    navigate: (page:string, article:Article) => void;
}

const ArticleComponent: FC<props> = ({article, navigate}) => {
    const readMoreHandler = useCallback(() => navigate('ArticleDetails', article), []);


    return (
            <View style={styles.article}>
                    <Text style={styles.title}>{article.title}</Text>
                    <Text style={styles.description}>{article.description}</Text>
                    <TouchableOpacity style={styles.readMoreButton}><Text style={styles.readMoreText} onPress={readMoreHandler}>Read more...</Text></TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    article: {
        marginBottom: 40,
        backgroundColor: ColorPalette.Burgundy,
        borderRadius: 20,
        padding: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 15,
    },

    title: {
        textAlign: "center",
        fontFamily: "Bold",
        color: ColorPalette.SoftWhite,
        fontSize: 18,
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        borderColor: ColorPalette.SoftWhite
    },

    description: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginBottom: 10,
        fontFamily: "Regular",
        textAlign: "justify",
        fontSize: 14,
        lineHeight: 20,
        color: ColorPalette.SoftWhite
    },

    readMoreButton: {
        justifyContent: "center",
        width: "33%",
        height: 32,
        backgroundColor: ColorPalette.SoftWhite,
        borderRadius: 5
    },

    readMoreText: {
        textAlign: "center",
        fontWeight: '600',
        color: ColorPalette.Black,
        fontFamily: "SemiBold"
    }
});

export default ArticleComponent;