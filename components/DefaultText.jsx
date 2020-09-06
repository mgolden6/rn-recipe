import React from "react";
import { StyleSheet, Text } from "react-native";

import Theme from "../constants/Theme";

const DefaultText = (props) => {
  return <Text style={styles.text}> {props.children} </Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Theme.fonts.regular,
  },
});

export default DefaultText;
