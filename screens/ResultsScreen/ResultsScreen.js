import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { reset } from "../../models/trivia/actions";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  BackHandler,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { colors } from "../../assets/global-styles/index";
import { styles as resultsScreenStyles } from "./styles";

const ResultsScreen = ({ navigation, totals, reset, route }) => {
  const [perfect, setPerfect] = useState(false);

  const { questions } = route.params;

  console.log(questions);
  console.log(totals.correct_answers);

  const onSwipeOrBackPress = () => {
    navigation.navigate("HomeScreen");
    return true;
  };

  useEffect(() => {
    if (totals.correct_answers == totals.total_questions) setPerfect(true);

    BackHandler.addEventListener("hardwareBackPress", onSwipeOrBackPress);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onSwipeOrBackPress);
  }, []);

  const playAgain = () => {
    reset();
    navigation.navigate("HomeScreen");
  };

  const playAgainButtonStyles = {
    container: styles.playAgainButton,
    textField: styles.playAgainButtonText,
    gradient: styles.playAgainButtonGradient,
  };

  const Item = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <View style={styles.checkIconContainer}>
          {item.correct_answer === "True" ? (
            <Image
              style={styles.checkIcon}
              source={require("../../assets/images/checked.png")}
            />
          ) : (
            <Image
              style={styles.checkIcon}
              source={require("../../assets/images/cancel.png")}
            />
          )}
        </View>
        <Text style={styles.questionText}>{item.question}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.resultsScreenHeaderContainer}>
        <Text style={styles.headerHeading}>You scored:</Text>
        <Text style={styles.headerScore}>
          {totals.correct_answers} of {totals.total_questions}
        </Text>
        <Text style={styles.headerMessage}>Scroll to see the results</Text>
      </View>
      <View style={styles.resultsScreenContentsContainer}>
        {perfect === true ? (
          <View style={styles.perfectScoreContainer}>
            <Text style={styles.contentsMessage}>No need for results</Text>
            <Text style={styles.contentsMessage}>
              You are the G.O.A.T of this game!!!
            </Text>
            <Image
              source={require("../../assets/images/goat.png")}
              style={styles.goatImage}
            />
          </View>
        ) : (
          <FlatList
            style={styles.flatListContainer}
            data={questions}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item, index) => item.question}
          ></FlatList>
        )}

        <View>
          <Text style={{ color: "white" }}>{totals.totals}</Text>
        </View>
      </View>
      <View style={styles.resultsScreenFooterContainer}>
        <Button
          title="PLAY AGAIN"
          styles={playAgainButtonStyles}
          colors={[colors.purple, colors.blue]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          onPress={() => playAgain()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(resultsScreenStyles);

const mapStateToProps = ({ totals }) => ({ totals });

const mapDispatchToProps = (dispatch) => ({
  reset: () => {
    dispatch(reset());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
