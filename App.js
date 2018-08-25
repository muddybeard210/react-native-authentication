import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import firebase from "firebase";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCvC3zT173aDr1upqco66qJKPL7IB-6-wo",
      authDomain: "reactnative-one-time-password.firebaseapp.com",
      databaseURL: "https://reactnative-one-time-password.firebaseio.com",
      projectId: "reactnative-one-time-password",
      storageBucket: "reactnative-one-time-password.appspot.com",
      messagingSenderId: "465152347613"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  }
});
