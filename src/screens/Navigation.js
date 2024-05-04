import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Tours from "../screens/Tours";
import Instruments from "../screens/Instruments";
import More from "../screens/More";
import TabButton from "../components/TabButton";

const TabArr = [
  {
    route: "Головна",
    type: "Ionicons",
    activeIcon: "home",
    inActiveIcon: "home-outline",
    component: Home,
  },
  {
    route: "Тури",
    type: "Ionicons",
    activeIcon: "compass",
    inActiveIcon: "compass-outline",
    component: Tours,
  },
  {
    route: "Інструменти",
    type: "MaterialCommunityIcons",
    activeIcon: "toolbox",
    inActiveIcon: "toolbox-outline",
    component: Instruments,
  },
  {
    route: "Інше",
    type: "Ionicons",
    activeIcon: "ellipsis-horizontal",
    inActiveIcon: "ellipsis-horizontal-outline",
    component: More,
  },
];

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            margin: 16,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
