import { StyleSheet, Text, View } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const books = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText style={styles.heading} title={true}>
        Your Reading List
      </ThemedText>
    </ThemedView>
  );
};

export default books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
