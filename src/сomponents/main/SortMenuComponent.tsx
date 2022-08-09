import {FC, ReactElement, useState} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ColorPalette} from "../ColorPalette";
import {SortBy} from "../../models/SortBy";
import {SearchBLoC} from "../../BLoCs/SearchBLoC";
import {observer} from "mobx-react-lite";
import {runInAction} from "mobx";
import DatesComponent from "./DatesComponent";
import CategoryComponent from "./CategoryComponent";

interface SortProps {
    sortBy: SortBy,
    fromDate: Date,
    toDate: Date,
    setSortByHandler: (element: SortBy) => void
}


const SortMenuComponent: FC<SortProps> = ({setSortByHandler ,sortBy, fromDate,toDate}) => {

    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    return (
        <TouchableOpacity style={visible ? styles.buttonPressed : styles.button}  onPress={toggleDropdown}>
            {visible && <DropDownMenuComponent setSortByHandler={setSortByHandler} sortBy={sortBy} toDate={toDate} fromDate={fromDate}/>}
            <ImageBackground style={{...styles.buttonIcon, ...{}}} source={require('../../assets/icons/sortBy.png')} resizeMode='contain'/>
        </TouchableOpacity>
    );
}

interface DropDownMenuProps {
    sortBy: SortBy,
    fromDate: Date,
    toDate: Date,
    setSortByHandler: (element: SortBy) => void
}

const DropDownMenuComponent: FC<DropDownMenuProps> = observer(({setSortByHandler, sortBy, fromDate,toDate}) => {

              return (<View style={styles.dropdown}>
                          {Object.values(SortBy).map((element, index) => {
                              const isActive = (sortByElement: SortBy) => {
                                      console.log("CategoryComponent#",element,"  BLoC.sortBy",sortBy);
                                      return sortBy === sortByElement;
                                      };

                              return <CategoryComponent  setSortByHandler={setSortByHandler}  sortBy={sortBy} element={element} elementIndex={index} isActive={isActive(element)}></CategoryComponent>
                          })}
                         <DatesComponent></DatesComponent>

                      </View>)
          });

const SortMenuComponentObserver = observer(SortMenuComponent);

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        height: "50%",
        width: "15%",
        backgroundColor: ColorPalette.SoftWhite,
        marginRight: "5%",
        borderRadius: 20,
        zIndex: 1,
    },

    buttonPressed: {
        flexDirection: 'row',
        alignItems: 'center',
        height: "50%",
        width: "15%",
        backgroundColor: ColorPalette.SoftWhite,
        marginRight: "5%",
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
        borderColor: ColorPalette.Black,
        top: 50,
        width: "300%",
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center",
        zIndex: 1,
    },
});

export default SortMenuComponentObserver;