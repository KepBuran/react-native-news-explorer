import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from "./header/HeaderComponent";
import ArticlesComponent from "./articles/ArticlesComponent";
import ArticlesComponentObserver from "./articles/ArticlesComponent";


const MainComponent = () => {
    return (
        <View>
            <HeaderComponent></HeaderComponent>
            <ArticlesComponentObserver></ArticlesComponentObserver>
        </View>
    );
}

const styles = {};

export default MainComponent;