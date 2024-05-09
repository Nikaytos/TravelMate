import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import React from "react";

function Auth({ onSignIn }) {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn">
        {(props) => <SignIn {...props} onSignIn={onSignIn} />}
      </Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default Auth;
