import React, {FC, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ColorPalette} from "../ColorPalette";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {SortBy} from "../../models/SortBy";

interface DatesProps {
    fromDate: Date,
    toDate: Date,
    setFromDateHandler: (date: Date | undefined) => void,
    setToDateHandler: (date: Date | undefined) => void,
}

const DatesComponent: FC<DatesProps> = ({fromDate, toDate, setToDateHandler, setFromDateHandler}) => {
    const [openFromDate, setOpenFromDate] = useState(false);
    const [openToDate, setOpenToDate] = useState(false);

    return (
        <View style={styles.dates}>
            {openFromDate && <RNDateTimePicker maximumDate={toDate} value={fromDate} mode={"date"} onChange={(event, value) => {setOpenFromDate(false); setFromDateHandler(value);}}></RNDateTimePicker>}
            <TouchableOpacity style={styles.menuItem} onPress={() => setOpenFromDate(true)}><Text style={styles.menuItemText}>From: {fromDate.toJSON().slice(0,10)}</Text></TouchableOpacity>

            {openToDate && <RNDateTimePicker minimumDate={fromDate} value={toDate} mode={"date"} onChange={(event, value) => {setOpenToDate(false); setToDateHandler(value);}}></RNDateTimePicker>}
            <TouchableOpacity style={styles.menuItem} onPress={() => setOpenToDate(true)}><Text style={styles.menuItemText}>To: {toDate.toJSON().slice(0,10)}</Text></TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    dates: {
        width: "100%",
        borderBottomWidth: 2,
        borderColor: ColorPalette.Burgundy,
    },

    menuItem: {
        justifyContent: "center",
        width: "100%",
        height: 40,
        borderBottomWidth: 2,
        borderColor: ColorPalette.Burgundy,
        backgroundColor: '#f5f2d0',
    },

    menuItemText: {
        textAlign: "center",
        color: ColorPalette.Black,
        fontFamily: "Bold",
    }

});


export default DatesComponent;