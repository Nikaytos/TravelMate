import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Task from "../../components/Services/Task";
import Icon from "react-native-vector-icons/FontAwesome";

const ToDoList = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const [iconColor, setIconColor] = useState("#333");

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    if (isDeleteActive) {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy);
    }
  };

  const deleteIconPressed = () => {
    const newColor = iconColor === "#333" ? "red" : "#333";
    setIconColor(newColor);
    setIsDeleteActive(!isDeleteActive);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Things on the road</Text>
          <TouchableOpacity onPress={deleteIconPressed}>
            <View style={styles.iconContainer}>
              <Icon
                name="trash-o"
                size={32}
                color={iconColor}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: { marginTop: 30 },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});

export default ToDoList;
