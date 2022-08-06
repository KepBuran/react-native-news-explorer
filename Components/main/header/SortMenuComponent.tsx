import {ReactElement, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from "react-native";
import {ColorPalette} from "../../../ColorPalette";
// import sortIcon from "../../../assets/icons/sortBy.svg";

function Icon(props: { name: string, type: string }) {
    return null;
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
                    <Text >
                        This is where the dropdown will be rendered.
                    </Text>
                </View>
            );
        }
    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={toggleDropdown}
        >
            {renderDropdown()}
            {/*<Text style={styles.buttonText}>SortBy</Text>*/}
            <Icon type='font-awesome' name='chevron-down'/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: ColorPalette.SoftWhite,
        height: 48,
        width: 48,
        paddingHorizontal: 10,
        marginRight: "20%",
        borderRadius: 20,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: ColorPalette.SoftWhite,
        borderBottomWidth: 1,
        borderColor: ColorPalette.Black,
        top: 50,
        height: 48,
        justifyContent: "center",
    },
});

export default SortMenuComponent;