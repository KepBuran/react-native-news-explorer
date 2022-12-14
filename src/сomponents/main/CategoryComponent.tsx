import {observer} from "mobx-react-lite";
import {runInAction} from "mobx";
import {Text, TouchableOpacity} from "react-native";
import {SortBy} from "../../models/SortBy";
import {StyleSheet} from "react-native";
import {SearchBLoC} from "../../BLoCs/SearchBLoC";
import {FC, useCallback} from "react";
import {ColorPalette} from "../ColorPalette";

interface CategoryProps {
    isActive: boolean,
    sortBy: SortBy,
    element: SortBy,
    elementIndex: number,
    setSortByHandler: (element: SortBy) => void,
    searchArticles: () => void;
}

const CategoryComponent: FC<CategoryProps> = ({setSortByHandler, sortBy, element, elementIndex, isActive, searchArticles}) => {

    const pressHandler = useCallback(() => {setSortByHandler(element); searchArticles();}, [element]);

    return (
        <TouchableOpacity key={elementIndex} style={isActive ? styles.activeMenuItem: styles.menuItem} onPress={pressHandler}>
            <Text style={styles.menuItemText}>{element}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuItem: {
        justifyContent: "center",
        width: "100%",
        height: 40,
        borderBottomWidth: 0.5,
        borderColor: ColorPalette.Black,
    },

    activeMenuItem: {
        justifyContent: "center",
        width: "100%",
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: ColorPalette.Burgundy,
        backgroundColor: "#c1fc96",
    },

    menuItemText: {
        textAlign: "center",
        color: ColorPalette.Black,
        fontFamily: "Bold"
    }

})


export default observer(CategoryComponent);