import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an account
      </ThemedText>

      <Spacer height={100} />
      <Link href="/login">
        <ThemedText
          style={{
            textAlign: "center",
          }}
        >
          Login instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
