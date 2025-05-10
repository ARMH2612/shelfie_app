import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  //   return <Stack />;
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ddd",
        },
        headerTintColor: "#333",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
