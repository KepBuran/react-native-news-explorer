import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from "./header/HeaderComponent";
import ArticlesComponent from "./articles/ArticlesComponent";


const MainComponent = () => {
    return (
        <View>
            <HeaderComponent></HeaderComponent>
            <ArticlesComponent></ArticlesComponent>
        </View>
    );
}

const style = {};

export default MainComponent;