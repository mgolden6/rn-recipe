import React from "react";
import { StyleSheet, View, Text } from "react-native";

import DefaultText from "../components/DefaultText";
import Theme from "../constants/Theme";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: Theme.colors.accentColor,
    borderWidth: 1,
    padding: 10,
  },
});

export default ListItem;
