import React from "react";
import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import Theme from "../constants/Theme";
import { MaterialIcons } from "@expo/vector-icons";

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

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons
              name="restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons
              name="favorite"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Theme.colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavTabNavigator);
