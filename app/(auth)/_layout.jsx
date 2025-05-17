import { StyleSheet, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useUser } from "../../hooks/useUser";

const AuthLayout = () => {
  const colorScheme = useColorScheme();

  const { user } = useUser();
  console.log(user);

  //   return <Stack />;
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
