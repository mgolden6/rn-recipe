import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigator from "./navigation/MealsNavigation";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [initializedApp, setInitializedApp] = useState(false);

  if (!initializedApp) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setInitializedApp(true)}
      />
    );
  }

  return <MealsNavigator />;
}
