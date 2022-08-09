import {Dimensions, StyleSheet, Text, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {ColorPalette} from "../ColorPalette";
import SortMenuComponent from "./SortMenuComponent";
import SearchComponent from "./SearchComponent";

const HeaderComponent = () => {
    return (
        <View style={styles.header}>
            <SortMenuComponent></SortMenuComponent>
            <SearchComponent></SearchComponent>
        </View>
    );
}

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        height: 100,
        flexDirection: "row",
        width: width,
        backgroundColor: ColorPalette.Burgundy,
        paddingLeft: width/20,
        alignItems: 'center',
        justifyContent: 'flex-start',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
});

export default HeaderComponent;