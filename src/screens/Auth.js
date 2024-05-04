import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import React from "react";

const Stack = createNativeStackNavigator();
function Auth({ onSignIn }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn">
          {(props) => <SignIn {...props} onSignIn={onSignIn} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;