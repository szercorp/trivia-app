import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { increment, total_questions } from "../../models/trivia/actions";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { styles as quizScreenStyles } from "./styles";
import _ from "lodash";

const QuizScreen = ({ increment, navigation, totals, total_questions }) => {
  const [questions, setQuestions] = useState([]);
  const [current_question, setCurrentQuestion] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading Quiz...");

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((response) => response.json())
      .then((data) => {
        setLoadingText(true);
        total_questions(data.results.length);
        setQuestions(data.results);
      })
      .catch((error) => {
        setLoadingText("There was an error loading the quiz" + error);
      });
  }, []);

  const trueButtonStyles = {
    container: styles.trueButton,
    textField: styles.trueButtonText,
  };

  const falseButtonStyles = {
    container: styles.falseButton,
    textField: styles.falseButtonText,
  };

  const onNextQuestion = (answer) => {
    let correct_answer = questions[current_question].correct_answer == "True";
    console.log(correct_answer);

    if (answer == correct_answer) increment();

    if (current_question >= totals.total_questions - 1) {
      navigation.navigate("ResultsScreen", { questions });
    } else {
      setCurrentQuestion(current_question + 1);
    }
  };

  if (_.isEmpty(questions)) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingContainerText}>{loadingText}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.quizScreenHeaderContainer}>
        <Text style={styles.headerHeading}>
          {questions[current_question].category}
        </Text>
      </View>
      <View style={styles.quizScreenContentsContainer}>
        <View style={styles.questionsContainer}>
          <Text style={styles.questionsText}>
            {questions[current_question].question}
          </Text>
        </View>
      </View>
      <View style={styles.questionsNumberContainer}>
        <Text style={styles.questionsNumber}>
          {current_question + 1} of {totals.total_questions}
        </Text>
      </View>
      <View style={styles.quizScreenFooterContainer}>
        <Button
          title="TRUE"
          styles={trueButtonStyles}
          onPress={() => onNextQuestion(true)}
        />
        <Button
          title="FALSE"
          styles={falseButtonStyles}
          onPress={() => onNextQuestion(false)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(quizScreenStyles);

const mapStateToProps = ({ totals }) => ({ totals });

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(increment());
  },
  total_questions: (totals) => {
    dispatch(total_questions(totals));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
