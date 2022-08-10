import {FC, useState} from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";
import {ColorPalette} from "../ColorPalette";
import {SortBy} from "../../models/SortBy";
import {observer} from "mobx-react-lite";
import DatesComponent from "./DatesComponent";
import CategoryComponent from "./CategoryComponent";

interface SortProps {
    sortBy: SortBy,
    fromDate: Date,
    toDate: Date,
    setSortByHandler: (element: SortBy) => void,
    setFromDateHandler: (date: Date | undefined) => void,
    setToDateHandler: (date: Date | undefined) => void,
}


const SortMenuComponent: FC<SortProps> = ({setFromDateHandler, setToDateHandler, setSortByHandler ,sortBy, fromDate,toDate}) => {
    const [visible, setVisible] = useState(false);
    const toggleDropdown = () => {
        setVisible(!visible);
    };

    return (
        <TouchableOpacity style={visible ? styles.buttonPressed : styles.button}  onPress={toggleDropdown}>
            {visible && <DropDownMenuComponent setSortByHandler={setSortByHandler}
                                               setFromDateHandler={setFromDateHandler} setToDateHandler={setToDateHandler}
                                               sortBy={sortBy} toDate={toDate} fromDate={fromDate}/>}
            <ImageBackground style={styles.buttonIcon} source={require('../../assets/icons/sortBy.png')} resizeMode='contain'/>
        </TouchableOpacity>
    );
}


const DropDownMenuComponent: FC<SortProps> = observer(({setFromDateHandler, setToDateHandler, setSortByHandler, sortBy, fromDate,toDate}) => {

    return (
        <View style={styles.dropdown}>
            {Object.values(SortBy).map((element, index) => {
                const isActive = (sortByElement: SortBy) => {
                    return sortBy === sortByElement;
                };
                return <CategoryComponent  setSortByHandler={setSortByHandler}  sortBy={sortBy} element={element} elementIndex={index} isActive={isActive(element)}></CategoryComponent>
            })}
            <DatesComponent fromDate={fromDate} toDate={toDate} setFromDateHandler={setFromDateHandler} setToDateHandler={setToDateHandler}></DatesComponent>
        </View>
    )
});


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        height: "50%",
        width: "13%",
        backgroundColor: ColorPalette.SoftWhite,
        marginRight: "5%",
        borderRadius: 20,
        zIndex: 1,
    },

    buttonPressed: {
        flexDirection: 'row',
        alignItems: 'center',
        height: "50%",
        width: "13%",
        backgroundColor: ColorPalette.SoftWhite,
        marginRight: "5%",
        borderColor: ColorPalette.Black,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 1,
    },

    buttonIcon: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        backgroundColor: ColorPalette.SoftWhite,
    },

    buttonText: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: ColorPalette.SoftWhite
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: ColorPalette.SoftWhite,
        borderWidth: 0.5,
        borderColor: ColorPalette.Black,
        top: 40,
        left: -0.5,
        width: "400%",
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center",
        zIndex: 1,
    },
});

export default observer(SortMenuComponent);