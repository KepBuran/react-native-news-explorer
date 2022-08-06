import {Dimensions, StyleSheet, Text, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {ColorPalette} from "../../../ColorPalette";
import SortMenuComponent from "./SortMenuComponent";

const HeaderComponent = () => {
    return (
        <View style={styles.header}>
            <SortMenuComponent></SortMenuComponent>
            <TextInput style={styles.search}>aa</TextInput>
        </View>
    );
}

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        width: width,
        backgroundColor: ColorPalette.Burgundy,
        paddingLeft: width/20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    search: {
        backgroundColor: '#FF1111',
        width: 100,
        height: 48,
        borderRadius: 10
    }
});

export default HeaderComponent;