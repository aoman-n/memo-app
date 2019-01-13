import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import { Platform } from 'react-native';

import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';

import ENV from './env.json';
/* eslint-disable-next-line */
require("firebase/firestore");

const config = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DB_URL,
  projectId:          ENV.FIREBASE_PRJ_ID,
  storageBucket:      ENV.FIREBASE_STORAGE,
  messagingSenderId:  ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

/* eslint "key-spacing": 0 */
const AppNavigator = createStackNavigator({
  Login:      { screen: LoginScreen },
  Signup:     { screen: SignupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoCreate: { screen: MemoCreateScreen },
  MemoEdit:   { screen: MemoEditScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Memow',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitleStyle: {
      color: '#fff',
      fontSize: 22,
    },
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#516B89',
      ...Platform.select({
        android: {
          backgroundColor: '#2e8b57',
        },
      }),
    },
  },
});

export default createAppContainer(AppNavigator);
