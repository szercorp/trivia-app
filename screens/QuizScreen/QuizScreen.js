import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { colors } from "../../assets/global-styles/index";
import { styles as quizScreenStyles } from "./styles";

const QuizScreen = () => {
  const [data, setData] = useState([]);

  const results = data.results;
  console.log(results);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const trueButtonStyles = {
    container: styles.trueButton,
    textField: styles.trueButtonText,
  };

  const falseButtonStyles = {
    container: styles.falseButton,
    textField: styles.falseButtonText,
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Text style={styles.quizScreenHeading}>Title</Text>
      <View style={styles.quizScreenContents}>
        <View style={styles.questionsContainer}></View>
        <Text style={styles.questionsNumber}>1 of 10</Text>
      </View>
      <View style={styles.checkButtonContainer}>
        <Button
          title="TRUE"
          styles={trueButtonStyles}
          //   onPress={() => navigation.navigate("QuizScreen")}
        />
        <Button
          title="FALSE"
          styles={falseButtonStyles}
          //   onPress={() => navigation.navigate("QuizScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(quizScreenStyles);

export default QuizScreen;
