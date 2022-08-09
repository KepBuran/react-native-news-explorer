import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from "./HeaderComponent";
import ArticlesComponent from "./ArticlesComponent";
import ArticlesComponentObserver from "./ArticlesComponent";


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