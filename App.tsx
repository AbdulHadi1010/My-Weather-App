import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/Tabs";

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}