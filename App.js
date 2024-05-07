import React, { useState } from "react";
import { View } from "react-native";
import Menu from "./src/screens/Menu";
import Auth from "./src/screens/Auth";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {!isAuthenticated ? (
        <Auth onSignIn={() => setIsAuthenticated(true)} />
      ) : (
        <Menu />
      )}
    </View>
  );
}
