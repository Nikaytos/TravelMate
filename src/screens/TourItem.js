import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import cheerio from "cheerio";

export default function TourItem() {
  const route = useRoute();
  const { tour } = route.params;

  return (
    <View>
      <Text>{tour.name}</Text>
      <Text>{tour.price}</Text>
      <Text>{tour.tourUrl}</Text>
    </View>
  );
}
