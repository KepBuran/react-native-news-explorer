import React, {FC, useEffect} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {NavigationProp, Route} from "@react-navigation/native";
import {Article} from "../../models/Article";
import {ColorPalette} from "../ColorPalette";




interface articleDetailsProps {
    navigation: NavigationProp<any>,
    route: Route<any, Article>;
}


const ArticleDetailsComponent: FC<articleDetailsProps> = ({route, navigation}) => {
    const article = route.params;
    useEffect(() => {navigation.setOptions({
            title: article.title,
            headerStyle:  styles.header,
            headerTitleStyle: styles.headerText,
            // headerBackImageSource:


    })}, []);



    return (
        <View>
            <Text>{article.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: ColorPalette.Burgundy
    },

    headerText: {
        color: ColorPalette.SoftWhite,
        fontFamily: "SemiBold"
    }




});

export default ArticleDetailsComponent;