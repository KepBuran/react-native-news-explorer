import {Dimensions, StyleSheet, View} from "react-native";
import {ColorPalette} from "../ColorPalette";
import SortMenuComponentObserver from "./SortMenuComponent";
import SearchComponent from "./SearchComponent";
import articlesStore from "../../store/ArticlesStore";
import {useEffect, useMemo} from "react";
import {ArticlesService} from "../../services/ArticlesService";
import {loadArticles} from "../../api/ArticlesApi";
import {SearchBLoC} from "../../BLoCs/SearchBLoC";
import {observer} from "mobx-react-lite";

const HeaderComponent = () => {
    const {articlesAmount, articles} = articlesStore;
    const articlesService = useMemo(() => new ArticlesService(loadArticles), []);
    const BLoC: SearchBLoC = useMemo(() => {return new SearchBLoC(articlesService)}, []);

    return (
        <View style={styles.header}>
            <SortMenuComponentObserver setSortByHandler={BLoC.setSortByHandler.bind(BLoC)}  sortBy={BLoC.sortBy} toDate={BLoC.toDate} fromDate={BLoC.fromDate}></SortMenuComponentObserver>
            <SearchComponent BLoC={BLoC} keyWords={BLoC.keyWords} searchArticles={BLoC.searchArticles.bind(this)} setKeyWordsHandler={BLoC.setKeyWordsHandler.bind(this)}></SearchComponent>
        </View>
    );
}


const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        height: 100,
        flexDirection: "row",
        width: width,
        backgroundColor: ColorPalette.Burgundy,
        paddingLeft: width/20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default observer(HeaderComponent);