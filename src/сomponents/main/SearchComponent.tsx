import {
    TextInput,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import {ColorPalette} from "../ColorPalette";
import {FC} from "react";
import {observer} from "mobx-react-lite";
import {SearchBLoC} from "../../BLoCs/SearchBLoC";


interface SearchProps {
    keyWords: string,
    setKeyWordsHandler: (value: string) => void,
    searchArticles: () => void,
    updateArticles: () => void;
}


const SearchComponent: FC<SearchProps> = ({keyWords, setKeyWordsHandler, searchArticles, updateArticles}) => {

    return (
        <View style={styles.search}>
            <TextInput style={styles.searchInput} placeholder={"Search by keyword..."}  value={keyWords} onChangeText={setKeyWordsHandler} onEndEditing={searchArticles}></TextInput>
            <TouchableOpacity style={styles.searchButton} onPress={updateArticles}>
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
        width: "13%",
        borderRadius: 20,
    },

    searchIcon: {
        borderRadius: 20,
        width: "100%",
        height: "100%",
        backgroundColor: ColorPalette.SoftWhite,
    }

})


export default observer(SearchComponent);