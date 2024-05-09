// TabButton.js

import React, { useEffect, useRef } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../../constants";

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 1 },
        1: { scale: 1.2 },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.2 },
        1: { scale: 1 },
      });
    }
  }, [focused]);

  const Icon = item.type === "Ionicons" ? Ionicons : MaterialCommunityIcons;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { top: 0 }]}
    >
      <Animatable.View ref={viewRef} duration={100}>
        <Icon
          name={focused ? item.activeIcon : item.inActiveIcon}
          size={30}
          color={focused ? Colors.primary : Colors.primaryLite}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
});

export default TabButton;
