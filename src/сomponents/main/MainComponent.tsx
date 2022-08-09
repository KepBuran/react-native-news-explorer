import { StatusBar } from 'expo-status-bar';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import ArticlesComponentObserver from "./ArticlesComponent";
import HeaderComponentObserver from "./HeaderComponent";


const MainComponent = () => {
    return (
        <View>
            <HeaderComponentObserver></HeaderComponentObserver>
            <ArticlesComponentObserver></ArticlesComponentObserver>
        </View>
    );
}

const styles = {};

export default MainComponent;