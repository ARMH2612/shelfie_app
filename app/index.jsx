import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import LOGO from "../assets/img/logo_light.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={styles.slogan}>Reading List App</Text>
      <Link href="/about" style={styles.link}>
        About page
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact page
      </Link>
    </View>
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
