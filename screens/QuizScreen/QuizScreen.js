import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  incrementAction,
  saveFetchedQuestionsAction,
  totalQuestionsAction,
  saveAnswerAction,
} from "../../models/trivia/actions";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { regex } from "./constants";
import { styles as quizScreenStyles } from "./styles";

const QuizScreen = ({
  incrementAction,
  navigation,
  saveFetchedQuestionsAction,
  saveAnswerAction,
  totals,
  totalQuestionsAction,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading Quiz...");

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((response) => response.json())
      .then((data) => {
        setLoadingText(true);
        totalQuestionsAction(data.results.length);
        saveFetchedQuestionsAction(
          data.results.map((result) => ({
            ...result,
            user_answer: undefined,
          }))
        );
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

  const onNextQuestion = (answer, currentQuestion) => {
    saveAnswerAction({ currentQuestion, answer });

    const isCorrectAnswer = totals.questions[currentQuestion].correct_answer;

    answer === isCorrectAnswer && incrementAction();

    if (currentQuestion >= totals.totalQuestions - 1) {
      navigation.navigate("ResultsScreen", { currentQuestion });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (_.isEmpty(totals.questions)) {
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
          {totals.questions[currentQuestion].category}
        </Text>
      </View>
      <View style={styles.quizScreenContentsContainer}>
        <View style={styles.questionsContainer}>
          <Text style={styles.questionsText}>
            {totals.questions[currentQuestion].question.replace(regex, "")}
          </Text>
        </View>
        <View style={styles.questionsNumberContainer}>
          <Text style={styles.questionsNumber}>
            {currentQuestion + 1} of {totals.totalQuestions}
          </Text>
        </View>
      </View>
      <View style={styles.quizScreenFooterContainer}>
        <Button
          title="TRUE"
          styles={trueButtonStyles}
          onPress={() => onNextQuestion("True", currentQuestion)}
        />
        <Button
          title="FALSE"
          styles={falseButtonStyles}
          onPress={() => onNextQuestion("False", currentQuestion)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(quizScreenStyles);

const mapStateToProps = ({ totals }) => ({ totals });

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => {
    dispatch(incrementAction());
  },
  saveFetchedQuestionsAction: (totals) => {
    dispatch(saveFetchedQuestionsAction(totals));
  },
  totalQuestionsAction: (totals) => {
    dispatch(totalQuestionsAction(totals));
  },
  saveAnswerAction: (currentQuestion, answer) => {
    dispatch(saveAnswerAction(currentQuestion, answer));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
