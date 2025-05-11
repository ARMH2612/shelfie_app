import { StyleSheet, Text, View } from "react-native";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";

const Profile = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText style={styles.heading} title={true}>
        Your Email
      </ThemedText>
      <Spacer />
      <ThemedText>Time to Start Reading Some Books...</ThemedText>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
