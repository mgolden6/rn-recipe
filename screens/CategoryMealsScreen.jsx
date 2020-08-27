import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((category) => category.id === catID);
  console.log(selectedCategory);

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
