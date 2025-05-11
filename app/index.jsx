import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import LOGO from "../assets/img/logo_light.png";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText title={true} style={styles.title}>
        The Number 1
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />
      <Link href="/login" style={styles.link}>
        <ThemedText>Login page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  slogan: {
    marginTop: 10,
    marginBottom: 30,
  },

  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
