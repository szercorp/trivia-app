import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { colors } from "../../assets/global-styles/index";
import { styles as resultsScreenStyles } from "./styles";
import HomeScreen from "../HomeScreen/HomeScreen";

const ResultsScreen = ({ navigation }) => {
  const playAgainButtonStyles = {
    container: styles.playAgainButton,
    textField: styles.playAgainButtonText,
    gradient: styles.playAgainButtonGradient,
  };
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.resultsScreenHeaderContents}>
        <Text style={styles.headerHeading}>You scored:</Text>
      </View>
      <View style={styles.resultsScreenContentsContainer}></View>
      <View style={styles.resultsScreenFooterContainer}>
        <Button
          title="PLAY AGAIN"
          styles={playAgainButtonStyles}
          colors={[colors.purple, colors.blue]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(resultsScreenStyles);

export default ResultsScreen;
