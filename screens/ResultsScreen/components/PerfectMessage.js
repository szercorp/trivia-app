import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { styles as resultsScreenStyles } from "../styles";

const PerfectMessage = () => {
  return (
    <View style={styles.perfectScoreContainer}>
      <Text style={styles.contentsMessage}>No need for results</Text>
      <Text style={styles.contentsMessage}>
        You are the G.O.A.T of this game!!!
      </Text>
      <Image
        source={require("../../../assets/images/goat.png")}
        style={styles.goatImage}
      />
    </View>
  );
};

const styles = StyleSheet.create(resultsScreenStyles);

export default PerfectMessage;
