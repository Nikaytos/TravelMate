import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();
  const onBackPressed = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", fontSize: 30, fontWeight: "bold" }}>
        Home
      </Text>
      <CustomButton
        text={"Back to Login"}
        onPress={onBackPressed}
      ></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default Index;
