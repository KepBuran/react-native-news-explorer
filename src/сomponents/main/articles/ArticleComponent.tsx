import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ColorPalette} from "../../ColorPalette";


interface props {
    title: string,
    description: string
}

const ArticleComponent: FC<props> = ({title, description}) => {



    return (
        <View style={styles.article}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.readMoreButton}><Text style={styles.readMoreText}>Read more...</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    article: {
        marginTop: 40,
        backgroundColor: ColorPalette.SoftWhite,
        borderRadius: 20,
        padding: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        textAlign: "center",
        fontFamily: "Bold",
        color: ColorPalette.Burgundy,
    },

    description: {
        padding: 10,
        marginBottom: 10,
        fontFamily: "Regular",

    },

    readMoreButton: {
        justifyContent: "center",
        width: "33%",
        height: 32,
        backgroundColor: ColorPalette.Burgundy,
        borderRadius: 5
    },

    readMoreText: {
        textAlign: "center",
        fontWeight: '600',
        color: ColorPalette.SoftWhite,
        fontFamily: "SemiBold"
    }
});

export default ArticleComponent;