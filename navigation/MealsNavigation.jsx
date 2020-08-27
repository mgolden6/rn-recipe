import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import { Platform } from "react-native";
import Theme from "../constants/Theme";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: "Categories",
    defaultNavigationOptions: {
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
    },
  }
);

export default createAppContainer(MealsNavigator);
