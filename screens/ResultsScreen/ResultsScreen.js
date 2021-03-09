import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { resetAction } from "../../models/trivia/actions";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  BackHandler,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PerfectMessage from "./components/PerfectMessage";
import FlatListItem from "./components/FlatListItem";
import Button from "../../components/Button";
import { colors } from "../../assets/global-styles/index";
import { styles as resultsScreenStyles } from "./styles";

const ResultsScreen = ({ navigation, totals, resetAction, route }) => {
  const [perfect, setPerfect] = useState(false);

  const { questions } = route.params;

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
    resetAction();
    navigation.navigate("HomeScreen");
  };

  const playAgainButtonStyles = {
    container: styles.playAgainButton,
    textField: styles.playAgainButtonText,
    gradient: styles.playAgainButtonGradient,
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
          <PerfectMessage />
        ) : (
          <FlatList
            style={styles.flatListContainer}
            data={questions}
            renderItem={({ item }) => (
              <FlatListItem item={item} correct_answer={item.correct_answer} />
            )}
            keyExtractor={(item, index) => item.question}
          />
        )}
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
  resetAction: () => {
    dispatch(resetAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
