import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { increment, total_questions } from "../../models/trivia/actions";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { colors } from "../../assets/global-styles/index";
import { styles as quizScreenStyles } from "./styles";
import ResultsScreen from "../ResultsScreen/ResultsScreen";
// import { connect } from "react-redux";
// import {
//   incrementCorrectAnswers,
//   totalQuestionsNumber,
// } from "../../models/trivia/actions";
import _ from "lodash";

const QuizScreen = ({ increment, totals, navigation, total_questions }) => {
  const [data, setData] = useState([]);
  const [current_question, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState("Loading Quiz");

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((response) => response.json())
      // .then((data) => setData(data.results));
      .then((responseData) => {
        switch (responseData.response_code) {
          case 2:
            setLoading("There was an error loading the questions");
            break;
          case 0:
            total_questions(responseData.results.length);
            // totalQuestionsNumber(data.results.length);
            setData(responseData.results);
            break;
          default:
            setLoading(
              "There was an error loading the questions (Unexpected response from the API)"
            );
        }
      });
    // .then((responseData) => {
    //   switch (responseData.response_code) {
    //     case 2:
    //       setLoading("There was an error loading the questions!");
    //       break;
    //     case 0:
    //       totalQuestionsNumber(responseData.results.length);
    //       setData(responseData.results);
    //       break;
    //     default:
    //       setLoading(
    //         "There was an error loading the questions (Unexpected response from the API)"
    //       );
    //   }
    // })
    // .catch((error) => {
    //   setLoading("There was an error loading the questions" + error);
    // })
    // .finally(() => {
    //   setLoading(
    //     "There was an error loading the questions (Could not connect to the API)"
    //   );
    // });
  }, []);

  console.log(data);

  // console.log(data[current_question].category);

  const trueButtonStyles = {
    container: styles.trueButton,
    textField: styles.trueButtonText,
  };

  const falseButtonStyles = {
    container: styles.falseButton,
    textField: styles.falseButtonText,
  };

  const onNextQuestion = (answer) => {
    let correct_answer = data[current_question].correct_answer == "True";

    console.log("Correct:", correct_answer);

    if (answer == correct_answer) increment();

    console.log(totals.total_questions);

    if (current_question >= totals.total_questions - 1) {
      navigation.navigate("ResultsScreen");
    } else {
      setCurrentQuestion(current_question + 1);
    }
  };

  // const onNextQuestion = (answer) => {
  //   let correct_answer = data[current_question].correct_answer == "True";

  //   if (answer == correct_answer) {
  //     incrementCorrectAnswers();
  //   }

  //   setCurrentQuestion(current_question + 1);

  //   // if (current_question >= totals.totalQuestionsNumber - 1) {
  //   //   navigation.navigate("ResultsScreen");
  //   // } else {
  //   //   setCurrentQuestion(current_question + 1);
  //   // }
  // };

  if (_.isEmpty(data)) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingContainerText}>{loading}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.quizScreenHeaderContainer}>
        <Text style={styles.headerHeading}>
          {data[current_question].category}
        </Text>
      </View>
      <View style={styles.quizScreenContentsContainer}>
        <View style={styles.questionsContainer}>
          <Text style={styles.questionsText}>
            {data[current_question].question}
          </Text>
        </View>
        <View style={styles.questionsNumberContainer}>
          <Text style={styles.questionsNumber}>{current_question + 1}</Text>
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
  increment: () => {
    dispatch(increment());
  },
  total_questions: () => {
    dispatch(total_questions());
  },
});

// const mapStateToProps = ({ totals }) => ({ totals });

// const mapDispatchToProps = (dispatch) => ({
//   incrementCorrectAnswers: () => {
//     dispatch(incrementCorrectAnswers());
//   },
//   totalQuestionsNumber: () => {
//     dispatch(totalQuestionsNumber());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
