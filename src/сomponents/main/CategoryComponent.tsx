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
    setSortByHandler: (element: SortBy) => void
}

const CategoryComponent: FC<CategoryProps> = ({setSortByHandler, sortBy, element, elementIndex, isActive}) => {
//     console.log("CategoryComponent render")

//     const isActive = (sortByElement: SortBy) => {
//         console.log("CategoryComponent#",element,"  BLoC.sortBy",BLoC.sortBy);
//         return BLoC.sortBy === sortByElement ? styles.activeMenuItem : styles.menuItem
//         };

    const pressHandler = useCallback(() => setSortByHandler(element), [element]);

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
        borderBottomWidth: 2,
        borderColor: ColorPalette.Burgundy,
        backgroundColor: ColorPalette.SoftWhite,
    },

    activeMenuItem: {
        justifyContent: "center",
        width: "100%",
        height: 40,
        borderBottomWidth: 2,
        borderColor: ColorPalette.Burgundy,
        backgroundColor: "#b5ff7a",
    },

    menuItemText: {
        textAlign: "center",
        color: ColorPalette.Black,
        fontFamily: "Bold"
    }

})


export default observer(CategoryComponent);