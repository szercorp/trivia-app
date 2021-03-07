import React, { useEffect, useState } from "react";
import { ReactComponent as Goat } from "../../assets/images/goat.svg";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { colors } from "../../assets/global-styles/index";
import { styles as resultsScreenStyles } from "./styles";

const ResultsScreen = ({ navigation, totals, questions }) => {
  const [perfect, setPerfect] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (totals.answers_total == totals.total_questions) {
      setPerfect(true);
    }
  });

  console.log("Results:", questions);

  const playAgainButtonStyles = {
    container: styles.playAgainButton,
    textField: styles.playAgainButtonText,
    gradient: styles.playAgainButtonGradient,
  };
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.resultsScreenHeaderContents}>
        <Text style={styles.headerHeading}>You scored:</Text>
        <Text style={styles.headerScore}>
          {totals.answers_total} of {totals.total_questions}
        </Text>
      </View>
      <View style={styles.resultsScreenContentsContainer}>
        {perfect === true && (
          <View
            style={{ alignItems: "center", justifyContent: "space-around" }}
          >
            <Text style={styles.contentsMessage}>
              You are the G.O.A.T of this game!!!
            </Text>
            <Image
              source={require("../../assets/images/goat.png")}
              style={styles.goatImage}
            />
          </View>
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
          onPress={() => navigation.navigate("HomeScreen")}
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
