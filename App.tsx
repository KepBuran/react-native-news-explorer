import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from "./src/сomponents/main/HeaderComponent";
import ArticlesComponent from "./src/сomponents/main/ArticlesComponent";
import MainComponent from "./src/сomponents/main/MainComponent";
import {ColorPalette} from "./src/сomponents/ColorPalette";
import {
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
    useFonts
} from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import {useEffect} from "react";
import {ArticlesService} from "./src/services/ArticlesService";
import {loadArticles} from "./src/api/ArticlesApi";

export default function App() {
    const [fontsLoaded] = useFonts({ExtraLight: Raleway_200ExtraLight, Light: Raleway_300Light, Regular: Raleway_400Regular, Bold: Raleway_700Bold, SemiBold: Raleway_600SemiBold});

    useEffect(() => {
        new ArticlesService(loadArticles).searchArticles();
    }, []);

    if (!fontsLoaded) {
        return <AppLoading></AppLoading>;
    }

    return (
        <View style={styles.container}>
            <MainComponent></MainComponent>
            <StatusBar style="light" backgroundColor={ColorPalette.Burgundy} translucent={false}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex:1
    },

    container: {
        flex: 1,
        backgroundColor: ColorPalette.DustyRose,
        alignItems: 'center',
        justifyContent: 'center',
    },


});
