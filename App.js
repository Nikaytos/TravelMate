import React from "react";
import { View } from "react-native";
import Navigation from "./src/screens/Navigation";
import SignIn from "./src/screens/SignIn";

export default function App() {
  const isAuthenticated = true;
  return (
    <View style={{ flex: 1 }}>
      {!isAuthenticated ? <SignIn /> : <Navigation />}
    </View>
  );
}
