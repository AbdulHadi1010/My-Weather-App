import {View, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import { BlurView } from "@react-native-community/blur";

export default function MyView({ props }) {
  return (
    <View style={styles.container}>
      <BlurView
        style={styles.absolute}
        Type="light"
        Amount={20}
        reducedTransparencyFallbackColor="white"
      >
        {props}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: "white",
  },
  container: {
    margin: 10,
    flex: 1,
    padding: 30,
    backgroundColor: "#2B225A",
    borderColor: "#716878",
    borderWidth: 1.5,
    borderRadius: 20,
  },
  absolute: {
    overlayColor: "transparent",
  },
});