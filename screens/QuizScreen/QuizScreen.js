import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  incrementAction,
  saveFetchedQuestionsAction,
  totalQuestionsAction,
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
  totals,
  totalQuestionsAction,
}) => {
  const [current_question, setCurrentQuestion] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading Quiz...");
  const [userAnswer, setUserAnswer] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((response) => response.json())
      .then((data) => {
        setLoadingText(true);
        totalQuestionsAction(data.results.length);
        saveFetchedQuestionsAction(data.results);
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
    console.log(userAnswer);

    const correct_answer =
      totals.questions[current_question].correct_answer == "True";

    answer == correct_answer && incrementAction();

    if (current_question >= totals.total_questions - 1) {
      navigation.navigate("ResultsScreen");
    } else {
      setCurrentQuestion(current_question + 1);
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
          {totals.questions[current_question].category}
        </Text>
      </View>
      <View style={styles.quizScreenContentsContainer}>
        <View style={styles.questionsContainer}>
          <Text style={styles.questionsText}>
            {totals.questions[current_question].question.replace(regex, "")}
          </Text>
        </View>
        <View style={styles.questionsNumberContainer}>
          <Text style={styles.questionsNumber}>
            {current_question + 1} of {totals.total_questions}
          </Text>
        </View>
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
  incrementAction: () => {
    dispatch(incrementAction());
  },
  saveFetchedQuestionsAction: (totals) => {
    dispatch(saveFetchedQuestionsAction(totals));
  },
  totalQuestionsAction: (totals) => {
    dispatch(totalQuestionsAction(totals));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
