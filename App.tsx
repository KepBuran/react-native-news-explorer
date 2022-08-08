import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from "./src/сomponents/main/header/HeaderComponent";
import ArticlesComponent from "./src/сomponents/main/articles/ArticlesComponent";
import MainComponent from "./src/сomponents/main/MainComponent";
import {ColorPalette} from "./src/сomponents/ColorPalette";
import {
    Raleway_200ExtraLight,
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
    useFonts
} from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";

export default function App() {
    const [fontsLoaded] = useFonts({Raleway_200ExtraLight, Regular: Raleway_400Regular, Bold: Raleway_700Bold, SemiBold: Raleway_600SemiBold});


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
