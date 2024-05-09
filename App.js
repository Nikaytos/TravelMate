import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Menu from "./src/screens/Menu";
import Auth from "./src/screens/Auth";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {!isAuthenticated ? (
          <Auth onSignIn={() => setIsAuthenticated(true)} />
        ) : (
          <Menu />
        )}
      </View>
      <StatusBar hidden />
    </NavigationContainer>
  );
}
