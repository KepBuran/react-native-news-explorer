import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import {ColorPalette} from "../ColorPalette";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const DatesComponent = () => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);


    return (
        <>

            {open && <RNDateTimePicker value={date} mode={"date"} onChange={(date, value) => console.log(value)}></RNDateTimePicker>}
            {/*<Button title="Open" onPress={() => setOpen(true)} />*/}

            {/*<DatePicker*/}
            {/*    modal*/}
            {/*    open={open}*/}
            {/*    date={date}*/}
            {/*    onConfirm={(date) => {*/}
            {/*        setOpen(false)*/}
            {/*        setDate(date)*/}
            {/*    }}*/}
            {/*    onCancel={() => {*/}
            {/*        setOpen(false)*/}
            {/*    }}*/}
            {/*/>*/}

        </>
    );
};

const styles = StyleSheet.create({
    menuItem: {
        justifyContent: "center",
        width: "100%",
        height: 40,
        borderBottomWidth: 2,
        borderColor: ColorPalette.Burgundy,
        backgroundColor: "#b20000",
    },

});


export default DatesComponent;