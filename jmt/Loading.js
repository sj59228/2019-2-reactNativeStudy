import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MaterialCommunityIcons size={108} name="bus" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  image: {
    flex: 1,
    backgroundColor: "transparent"
  }
});
