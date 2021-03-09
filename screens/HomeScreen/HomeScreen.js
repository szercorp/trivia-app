import React, { useEffect } from "react";
import { connect } from "react-redux";
import { resetAction } from "../../models/trivia/actions";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { colors } from "../../assets/global-styles/index";
import { styles as homeScreenStyles } from "./styles";

const HomeScreen = ({ navigation, resetAction }) => {
  useEffect(() => {
    resetAction();
  }, []);

  const beginButtonStyles = {
    container: styles.beginButton,
    textField: styles.beginButtonText,
    gradient: styles.beginButtonGradient,
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.homeScreenHeaderContainer}>
        <Text style={styles.headerHeading}>
          Welcome to the Trivia challenge!
        </Text>
      </View>
      <View style={styles.homeScreenContentsContainer}>
        <Text style={styles.contentsHeading}>
          You will be presented with 10 True or False questions.
        </Text>
        <Text style={styles.contentsHeading}>Can you score 100%?</Text>
      </View>
      <View style={styles.homeScreenFooterContainer}>
        <Button
          title="BEGIN"
          styles={beginButtonStyles}
          colors={[colors.purple, colors.blue]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          onPress={() => navigation.navigate("QuizScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create(homeScreenStyles);

const mapDispatchToProps = (dispatch) => ({
  resetAction: () => {
    dispatch(resetAction());
  },
});

export default connect(null, mapDispatchToProps)(HomeScreen);
