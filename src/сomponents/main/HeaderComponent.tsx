import {Dimensions, StyleSheet, View} from "react-native";
import {ColorPalette} from "../ColorPalette";
import SortMenuComponent from "./SortMenuComponent";
import SearchComponent from "./SearchComponent";
import articlesStore from "../../store/ArticlesStore";
import {useMemo} from "react";
import {ArticlesService} from "../../services/ArticlesService";
import {loadArticles} from "../../api/ArticlesApi";
import {SearchBLoC} from "../../BLoCs/SearchBLoC";
import {observer} from "mobx-react-lite";

const HeaderComponent = () => {
    const articlesService = useMemo(() => new ArticlesService(loadArticles), []);
    const BLoC: SearchBLoC = useMemo(() => {return new SearchBLoC(articlesService)}, []);

    return (
        <View style={styles.header}>
            <SortMenuComponent setSortByHandler={BLoC.setSortByHandler.bind(BLoC)} setFromDateHandler={BLoC.setFromDateHandler} setToDateHandler={BLoC.setToDateHandler.bind(BLoC)}
                                       sortBy={BLoC.sortBy} toDate={BLoC.toDate} fromDate={BLoC.fromDate} ></SortMenuComponent>
            <SearchComponent BLoC={BLoC} keyWords={BLoC.keyWords} searchArticles={BLoC.searchArticles.bind(this)} setKeyWordsHandler={BLoC.setKeyWordsHandler}></SearchComponent>
        </View>
    );
}


const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        height: 80,
        flexDirection: "row",
        width: width,
        backgroundColor: ColorPalette.Burgundy,
        paddingLeft: width/100*7,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default observer(HeaderComponent);