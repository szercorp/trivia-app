import "react-native-gesture-handler";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import QuizScreen from "./screens/QuizScreen/QuizScreen";
import ResultsScreen from "./screens/ResultsScreen/ResultsScreen";
import { Provider } from "react-redux";
import configureStore from "./models/trivia/configureStore";

const Stack = createStackNavigator();

const loadFonts = () => {
  return Font.loadAsync({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });
};

const store = configureStore();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="QuizScreen" component={QuizScreen} />
            <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
