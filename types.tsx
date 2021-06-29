import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Auth: undefined;
  Chat: undefined;
  ContactInfo: undefined;
  TypeStatus: undefined;
  Status: undefined;
};

export type BottomTabParamList = {
  Calls: undefined;
  Camera: undefined;
  Chats: undefined;
  Settings: undefined;
  Status: undefined;
};

export type navigationType = {
  navigation: StackNavigationProp<RootStackParamList>;
};
