import {
    TextInput,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import {ColorPalette} from "../ColorPalette";
import {SearchBLoC} from "../../BLoCs/SearchBLoC";
import {FC} from "react";
import {observer} from "mobx-react-lite";


interface SearchProps {
    BLoC: SearchBLoC,
}


const SearchComponent: FC<SearchProps> = ({BLoC}) => {
    const {keyWords} = BLoC;
    return (
        <View style={styles.search}>
            <TextInput style={styles.searchInput} placeholder={"Search by keyword..."} value={keyWords} onChangeText={BLoC.setKeyWords}></TextInput>
            <TouchableOpacity style={styles.searchButton} onPress={BLoC.searchArticles.bind(BLoC)}>
                <ImageBackground style={styles.searchIcon} source={require('../../assets/icons/searchIcon.png')} resizeMode='contain'/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center"
    },

    searchInput: {
        backgroundColor: ColorPalette.SoftWhite,
        width: "55%",
        height: "50%",
        borderRadius: 10,
        textAlign: "center",
        marginRight: "5%",
        fontSize: 18,
        paddingHorizontal:5,
        textAlignVertical: "center",
        fontFamily: "SemiBold"
    },

    searchButton: {
        underlayColor: ColorPalette.Burgundy,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorPalette.SoftWhite,
        height: "50%",
        width: "15%",
        borderRadius: 20,
    },

    searchIcon: {
        borderRadius: 20,
        width: "100%",
        height: "100%",
        // width: 32,
        // height: 32,
        backgroundColor: ColorPalette.SoftWhite,
    }

})


export default observer(SearchComponent);