import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { regex } from "../constants";
import { styles as resultsScreenStyles } from "../styles";

const FlatListItem = ({ correct_answer, item }) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.checkIconContainer}>
        {correct_answer === "True" ? (
          <Image
            style={styles.checkIcon}
            source={require("../../../assets/images/checked.png")}
          />
        ) : (
          <Image
            style={styles.checkIcon}
            source={require("../../../assets/images/cancel.png")}
          />
        )}
      </View>
      <Text style={styles.questionText}>
        {item.question.replace(regex, "")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create(resultsScreenStyles);

export default FlatListItem;
