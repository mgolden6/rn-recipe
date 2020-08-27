import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";

import Theme from "../constants/Theme";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((category) => category.id === catID);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Meal Detail"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((category) => category.id === catID);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor:
        Platform.OS === "android"
          ? Theme.colors.primaryColor
          : Theme.colors.light,
    },
    headerTintColor:
      Platform.OS === "android"
        ? Theme.colors.light
        : Theme.colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
