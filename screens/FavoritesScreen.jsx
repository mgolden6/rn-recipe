import React from "react";

import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "react-navigation-drawer";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.noFavsText}>
        <DefaultText>No favorite Meals found. Start adding some!</DefaultText>
      </View>
    );
  } else {
    return <MealList listData={favMeals} navigation={props.navigation} />;
  }
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  noFavsText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
