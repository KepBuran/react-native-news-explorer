import {
    TextInput,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TouchableHighlight,
    NativeSyntheticEvent, TextInputFocusEventData
} from "react-native";
import {ColorPalette} from "../../ColorPalette";
import {SearchBlock} from "../../../blocks/SearchBlock";
import {ArticlesService} from "../../../services/ArticlesService";
import {useMemo} from "react";


const SearchComponent = () => {
    const block: SearchBlock = new SearchBlock(new ArticlesService());//useMemo(() => {return new SearchBlock(new ArticlesService())}, [new ArticlesService()]);

    return (
        <View style={styles.search}>
            <TextInput style={styles.searchInput} placeholder={"Search by keyword..."}></TextInput>
            <TouchableOpacity style={styles.searchButton} onPress={block.searchArticles.bind(block)}>
                <ImageBackground style={styles.searchIcon} source={require('../../../assets/icons/searchIcon.png')} resizeMode='contain'/>
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
        height: 36,
        borderRadius: 10,
        textAlign: "center",
        marginRight: "5%",
        fontSize: 16,
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

export default SearchComponent;