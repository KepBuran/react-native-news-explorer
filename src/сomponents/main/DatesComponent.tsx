import React, {FC, useCallback, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ColorPalette} from "../ColorPalette";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {SortBy} from "../../models/SortBy";

interface DatesProps {
    fromDate: Date,
    toDate: Date,
    setFromDateHandler: (date: Date | undefined) => void,
    setToDateHandler: (date: Date | undefined) => void,
    searchArticles: () => void;
}

const DatesComponent: FC<DatesProps> = ({searchArticles, fromDate, toDate, setToDateHandler, setFromDateHandler}) => {
    const [openFromDate, setOpenFromDate] = useState(false);
    const [openToDate, setOpenToDate] = useState(false);

    const onChangeFromDateHandler = (event: any, value: Date | undefined) => {setOpenFromDate(false);   setFromDateHandler(value); searchArticles()};
    const onChangeToDateHandler = (event: any, value: Date | undefined) => {setOpenToDate(false); setToDateHandler(value); searchArticles()};

    return (
        <View style={styles.dates}>
            {openFromDate && <RNDateTimePicker maximumDate={toDate} value={fromDate} mode={"date"} onChange={onChangeFromDateHandler}></RNDateTimePicker>}
            <TouchableOpacity style={styles.menuItem} onPress={() => setOpenFromDate(true)}><Text style={styles.menuItemText}>From: {fromDate.toJSON().slice(0,10)}</Text></TouchableOpacity>

            {openToDate && <RNDateTimePicker minimumDate={fromDate} value={toDate} mode={"date"} onChange={onChangeToDateHandler}></RNDateTimePicker>}
            <TouchableOpacity style={styles.menuItem} onPress={() => setOpenToDate(true)}><Text style={styles.menuItemText}>To: {toDate.toJSON().slice(0,10)}</Text></TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    dates: {
        width: "100%",
        borderTopWidth: 1,
        borderColor: ColorPalette.Burgundy,
    },

    menuItem: {
        justifyContent: "center",
        width: "100%",
        height: 40,
        borderTopWidth: 1,
        borderColor: ColorPalette.Black,
        backgroundColor: ColorPalette.SoftWhite,
    },

    menuItemText: {
        textAlign: "center",
        color: ColorPalette.Black,
        fontFamily: "Bold",
    }

});


export default DatesComponent;