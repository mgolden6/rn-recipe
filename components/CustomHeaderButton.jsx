import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";

import Theme from "../constants/Theme";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
      color={
        Platform.OS === "android"
          ? Theme.colors.light
          : Theme.colors.primaryColor
      }
    />
  );
};

export default CustomHeaderButton;
