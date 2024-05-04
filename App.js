import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Home, Tours, Instruments, More } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 0,
    backgroundColor: "#fff",
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 0,
  },
  tabBarActiveStyle: {
    backgroundColor: "black",
  },
};

const TabBarIcon = ({ icon, label, focused }) => {
  return (
    <View style={styles.tab}>
      <FontAwesome5
        name={icon}
        size={24}
        color={focused ? "#16247d" : "#111"}
      />
      <Text style={[styles.label, { color: focused ? "#16247d" : "#111" }]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Головна"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon icon="home" label="Головна" focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Тури"
          component={Tours}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon icon="compass" label="Тури" focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Інструменти"
          component={Instruments}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                icon="toolbox"
                label="Інструменти"
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Інше"
          component={More}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon icon="ellipsis-h" label="Інше" focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
