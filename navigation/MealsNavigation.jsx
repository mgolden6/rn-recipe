import React from "react";
import { Platform, Text } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import Theme from "../constants/Theme";
import { MaterialIcons } from "@expo/vector-icons";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === "android"
        ? Theme.colors.primaryColor
        : Theme.colors.light,
  },
  headerTitleStyle: {
    fontFamily: Theme.fonts.bold,
  },
  headerBackTitleStyle: {
    fontFamily: Theme.fonts.regular,
  },
  headerTintColor:
    Platform.OS === "android" ? Theme.colors.light : Theme.colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
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
      tabBarColor: Theme.colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text
            style={{
              fontFamily: Theme.fonts.regular,
            }}
          >
            Meals
          </Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialIcons name="favorite" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Theme.colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text
            style={{
              fontFamily: Theme.fonts.regular,
            }}
          >
            Favorites
          </Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Theme.colors.light,
        shifting: true,
        barStyle: {
          backgroundColor: Theme.colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: Theme.fonts.bold,
          },
          activeTintColor: Theme.colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Theme.colors.accentColor,
      labelStyle: {
        fontFamily: Theme.fonts.regular,
      },
    },
  }
);

export default createAppContainer(MainNavigator);
