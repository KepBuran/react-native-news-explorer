import {StyleSheet, Text, View} from "react-native";

const ArticlesComponent = () => {
    return (
        <View style={styles.articles}>
            <Text>Articles</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    articles: {
        flex: 7
    },
});

export default ArticlesComponent;