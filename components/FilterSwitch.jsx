import React from "react";
import { View, Text, Switch, Platform, StyleSheet } from "react-native";

import Theme from "../constants/Theme";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Theme.colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Theme.colors.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FilterSwitch;
