import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from "./Components/main/header/HeaderComponent";
import ArticlesComponent from "./Components/main/articles/ArticlesComponent";
import MainComponent from "./Components/main/MainComponent";
import {ColorPalette} from "./ColorPalette";

export default function App() {
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
        backgroundColor: ColorPalette.SoftWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },


});
