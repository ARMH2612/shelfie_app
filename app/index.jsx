import { Image, StyleSheet, Text, View } from "react-native";
import LOGO from "../assets/img/logo_light.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={styles.slogan}>Reading List App</Text>
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
});
