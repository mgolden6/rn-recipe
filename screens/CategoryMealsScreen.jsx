import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };
  const catID = props.navigation.getParam("categoryID");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((category) => category.id === catID);

  return {
    headerTitle: selectedCategory.title,
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
