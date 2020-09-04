import React from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam("categoryID");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((category) => category.id === catID);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
