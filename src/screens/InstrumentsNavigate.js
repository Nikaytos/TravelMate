import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDoList from "./Instruments/ToDoList";
import Instruments from "./Instruments/Instruments";
import React from "react";

export default function InstrumentsNavigate() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Instruments" component={Instruments} />
      <Stack.Screen name="ToDoList" component={ToDoList} />
    </Stack.Navigator>
  );
}
