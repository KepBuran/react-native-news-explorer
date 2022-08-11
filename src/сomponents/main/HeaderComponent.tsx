import {Dimensions, StyleSheet, View} from "react-native";
import {ColorPalette} from "../ColorPalette";
import SortMenuComponent from "./SortMenuComponent";
import SearchComponent from "./SearchComponent";
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
            <SortMenuComponent setSortByHandler={BLoC.setSortByHandler.bind(BLoC)} setFromDateHandler={BLoC.setFromDateHandler} setToDateHandler={BLoC.setToDateHandler}
                                       sortBy={BLoC.sortBy} toDate={BLoC.toDate} fromDate={BLoC.fromDate} searchArticles={BLoC.searchArticles} ></SortMenuComponent>
            <SearchComponent keyWords={BLoC.keyWords} searchArticles={BLoC.searchArticles} setKeyWordsHandler={BLoC.setKeyWordsHandler} updateArticles={BLoC.updateArticles}></SearchComponent>
        </View>
    );
}

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    header: {
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