import React, { useState } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import CategoriesScreen from "./screens/CategoriesScreen";

const fetchFonts = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  return <CategoriesScreen />;
}
