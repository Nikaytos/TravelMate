import { View, ScrollView, StyleSheet, Text } from "react-native";
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
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Інструменти</Text>
          <CustomButton
            text={"Список речей"}
            type="ROUNDED"
            onPress={onToDoListPressed}
          />
          <CustomButton
            text={"Карта"}
            type="ROUNDED"
            onPress={onToDoListPressed}
          />
          <CustomButton
            text={"Wi-Fi"}
            type="ROUNDED"
            onPress={onToDoListPressed}
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
