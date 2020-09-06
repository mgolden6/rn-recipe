import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { ScrollView } from "react-native-gesture-handler";
import DefaultText from "../components/DefaultText";
import Theme from "../constants/Theme";
import ListItem from "../components/ListItem";
import { useSelector } from "react-redux";

const MealDetailsScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  // useEffect(() => {
  //   props.navigation.setParams({ mealTitle: selectedMeal.title });
  // }, [selectedMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}> {ingredient} </ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealTitle = navigationData.navigation.getParam("mealTitle");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="star"
          onPress={() => {
            console.log("favorite clicked");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Theme.fonts.bold,
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detail: {
    fontFamily: Theme.fonts.regular,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
});

export default MealDetailsScreen;
