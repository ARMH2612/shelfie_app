import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APP_WRITE_END_POINT)
  .setProject(process.env.EXPO_PUBLIC_APP_WRITE_PROJECT_ID)
  .setPlatform(process.env.EXPO_PUBLIC_APP_WRITE_PLATFORME);

export const account = new Account(client);
export const avatars = new Avatars(client);
