import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TourList from "../components/TourList/TourList";
import { Colors } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Пошук"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={25} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <TourList searchTerm={searchTerm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1.5,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  filterButton: {
    backgroundColor: Colors.primary,
    padding: 7.5,
    borderRadius: 10,
  },
  filterText: {
    color: Colors.white,
    fontWeight: "bold",
  },
});

export default Tours;
