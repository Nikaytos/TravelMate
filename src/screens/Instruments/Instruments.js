import { View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";

export default function Instruments() {
  const navigation = useNavigation();

  const onToDoListPressed = () => {
    navigation.navigate("ToDoList");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <CustomButton text={"Список речей"} onPress={onToDoListPressed} />
      </View>
    </ScrollView>
  );
}
