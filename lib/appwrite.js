import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint(process.env.APP_WRITE_END_POINT)
  .setProject(process.env.APP_WRITE_PROJECT_ID)
  .setPlatform(process.env.APP_WRITE_PLATFORME);

export const account = new Account(client);
export const avatars = new Avatars(client);
