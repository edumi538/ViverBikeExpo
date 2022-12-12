import { View, Text } from "react-native";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  if (__DEV__) {
    import("./src/config/ReactotronConfig");
  }

  return (
    <View>
      <LoginScreen />
    </View>
  );
}

// export { default } from "./storybook";
