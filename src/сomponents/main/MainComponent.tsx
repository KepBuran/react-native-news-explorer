import { StatusBar } from 'expo-status-bar';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import ArticlesComponent from "./ArticlesComponent";
import HeaderComponent from "./HeaderComponent";
import {NavigationProp} from '@react-navigation/native';
import {FC} from "react";
import {ColorPalette} from "../ColorPalette";

interface mainProps {
    navigation: NavigationProp<any>;
}

const MainComponent: FC<mainProps> = ({navigation}) => {
    return (
        <View style={styles.main}>
            <HeaderComponent></HeaderComponent>
            <ArticlesComponent navigate={navigation.navigate}></ArticlesComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: ColorPalette.SoftWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default MainComponent;