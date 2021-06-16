import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Calls: {},
          Camera: {},
          Chats: {},
          Settings: {},
          Status: {},
        },
      },
      Auth: {},
      ContactInfo: {},
      Chat: {},
      NotFound: "*",
    },
  },
};
