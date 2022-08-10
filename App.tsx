import { StatusBar } from 'expo-status-bar';
import MainComponent from "./src/сomponents/main/MainComponent";
import {ColorPalette} from "./src/сomponents/ColorPalette";
import {
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
    useFonts
} from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import {useEffect} from "react";
import {ArticlesService} from "./src/services/ArticlesService";
import {loadArticles} from "./src/api/ArticlesApi";
import {NavigationContainer, Route} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ArticleDetailsComponent from "./src/сomponents/articleDetails/ArticleDetailsComponent";
import { Article } from './src/models/Article';

export default function App() {
    const [fontsLoaded] = useFonts({ExtraLight: Raleway_200ExtraLight, Light: Raleway_300Light, Regular: Raleway_400Regular, Bold: Raleway_700Bold, SemiBold: Raleway_600SemiBold});

    useEffect(() => {
        new ArticlesService(loadArticles).searchArticles();
    }, []);

    if (!fontsLoaded) {
        return <AppLoading></AppLoading>;
    }

    const Stack = createNativeStackNavigator();


    return (
        // <View style={styles.container}>
        //     <MainComponent></MainComponent>
        // </View>


        <>
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Main" component={MainComponent} options={{ headerShown: false }}/>
                    <Stack.Screen name="ArticleDetails" component={ArticleDetailsComponent} options={{}}/>
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="light" backgroundColor={ColorPalette.Burgundy} translucent={false}/>
        </>
    );
}

