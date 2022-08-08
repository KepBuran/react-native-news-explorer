import {ReactElement, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, ImageBackground, GestureResponderEvent} from "react-native";
import {ColorPalette} from "../../ColorPalette";

enum SortBy {
    popularity="Popularity",
    publishedAt="Publication date",
    relevancy="Relevancy",
}

const SortMenuComponent = () => {
    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    const renderDropdown = (): ReactElement | undefined => {
        if (visible) {
            return (
                <View style={styles.dropdown}>
                    <TouchableOpacity style={styles.menuItem}><Text style={styles.menuItemText}>{SortBy.popularity}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}><Text style={styles.menuItemText}>{SortBy.publishedAt}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}><Text style={styles.menuItemText}>{SortBy.relevancy}</Text></TouchableOpacity>
                </View>
            );
        }
    };


    return (
        <TouchableOpacity style={visible ? styles.buttonPressed : styles.button}  onPress={toggleDropdown}>
            {renderDropdown()}
            <ImageBackground style={{...styles.buttonIcon, ...{}}} source={require('../../../assets/icons/sortBy.png')} resizeMode='contain'/>
        </TouchableOpacity>
    );
}

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

    menuItem: {
        justifyContent: "center",
        width: "100%",
        height: 40,
        borderBottomWidth: 2,
        borderColor: ColorPalette.Burgundy,
        backgroundColor: ColorPalette.SoftWhite,
    },

    menuItemText: {
        textAlign: "center",
        color: ColorPalette.Black,
        fontFamily: "Bold"
    }
});

export default SortMenuComponent;