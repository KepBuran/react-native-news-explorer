import {
    TextInput,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import {ColorPalette} from "../ColorPalette";
import {SearchBLoC} from "../../BLoCs/SearchBLoC";
import {ArticlesService} from "../../services/ArticlesService";
import {useMemo} from "react";
import articlesStore from "../../store/ArticlesStore";
import {loadArticles} from "../../api/ArticlesApi";


const SearchComponent = () => {
    const {articlesAmount, articles} = articlesStore;
    const articlesService = useMemo(() => new ArticlesService(loadArticles), []);
    const BLoC: SearchBLoC = useMemo(() => {return new SearchBLoC(articlesService)}, [articlesAmount, articles]);

    return (
        <View style={styles.search}>
            <TextInput style={styles.searchInput} placeholder={"Search by keyword..."}></TextInput>
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

export default SearchComponent;