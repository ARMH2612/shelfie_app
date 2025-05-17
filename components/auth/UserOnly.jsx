import React, { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
import { Text } from "react-native";

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!authChecked || user === null) {
      router.replace("/login");
    }
  }, [user, authChecked]);

  if (!authChecked || !user) {
    console.log({
      authChecked,
      user,
    });

    return <Text>Loading...</Text>;
  }
  return children;
};

export default UserOnly;
