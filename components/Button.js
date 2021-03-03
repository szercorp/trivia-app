import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ styles, title, onPress, colors, start, end }) => {
  const text = title && <Text style={styles.textField}>{title}</Text>;

  if (colors) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <LinearGradient
          colors={colors}
          start={start}
          end={end}
          style={styles.gradient}
        >
          <TouchableOpacity onPress={onPress}>{text}</TouchableOpacity>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {text}
    </TouchableOpacity>
  );
};

export default Button;
