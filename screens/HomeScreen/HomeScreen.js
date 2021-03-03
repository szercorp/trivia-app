import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { colors } from "../../assets/global-styles/index";
import { styles as homeScreenStyles } from "./styles";

const HomeScreen = ({ navigation }) => {
  const beginButtonStyles = {
    container: styles.beginButton,
    textField: styles.beginButtonText,
    gradient: styles.beginButtonGradient,
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Text style={styles.homeScreenHeading}>
        Welcome to the Trivia challenge!
      </Text>
      <Text style={styles.homeScreenSubheading}>
        You will be presented with 10 True or False questions.
      </Text>
      <Text style={styles.homeScreenSubheading}>Can you score 100%?</Text>
      <Button
        title="BEGIN"
        styles={beginButtonStyles}
        colors={[colors.purple, colors.blue]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        onPress={() => navigation.navigate("QuizScreen")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(homeScreenStyles);

export default HomeScreen;
