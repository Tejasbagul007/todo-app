import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

// CUSTOM IMPORTS
import styles from "./DashboardStyle";
import { images } from "../../resources/images";
import { colors } from "../../resources/colors";
import AnalogClock from "react-native-clock-analog";
import { logoutUser } from "../../redux/action";

const DashboardScreen = ({navigation}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    // dispatch(logoutUser()); 

    // Navigate to the first page or login screen
    navigation.navigate("Login");
    // ...
  };

  const userData = useSelector((state) => state.userReducer);
  useEffect(() => {
    console.log("userData:", userData); // getting user name
  }, []);

  const getGreeting = () => {
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  useEffect(() => {
    const loadTodoList = async () => {
      try {
        const storedTodoList = await AsyncStorage.getItem("todoList");
        if (storedTodoList) {
          setTodoList(JSON.parse(storedTodoList));
        }
      } catch (error) {
        console.error("Error loading todo list:", error);
      }
    };
    loadTodoList();
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodoList = [
        ...todoList,
        { text: newTodo, completed: false },
      ];
      setTodoList(updatedTodoList);
      saveTodoList(updatedTodoList);
      setNewTodo("");
      setModalVisible(false);
    }
  };

  const toggleTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
    saveTodoList(updatedTodoList);
  };

  const deleteTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
    saveTodoList(updatedTodoList);
  };

  const saveTodoList = async (todoList) => {
    try {
      await AsyncStorage.setItem("todoList", JSON.stringify(todoList));
    } catch (error) {
      console.error("Error saving todo list:", error);
    }
  };

  const renderTodoItem = ({ item, index }) => (
    <View style={styles.todo}>
      <View>
        <TouchableOpacity onPress={() => toggleTodo(index)}>
          {item.completed ? (
            <Image
              style={[
                styles.checkbox,
                item.completed && { backgroundColor: colors.aqua },
              ]}
            />
          ) : (
            <Image style={styles.checkbox} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.boxTextWrapper}>
        <Text style={[styles.boxText, item.completed && styles.completedText]}>
          {item.text}
        </Text>
      </View>
      <View style={styles.smallbox}>
        <TouchableOpacity onPress={() => deleteTodo(index)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.rectangleWrapper}>
        <View style={styles.circle}>
          <Image source={images.cpcircles} resizeMode="contain" />
        </View>
        <View style={styles.profile}>
          <Image source={images.profile} resizeMode="contain" />
        </View>

        <View style={styles.welcomeText}>
          <Text style={styles.boldtext}>
            {" "}
            Welcome,{userData.userDetails.registerUsername}!
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.goodafternoonStyle}>
          <Text style={styles.boldtext2}>{getGreeting()} ! </Text>
        </View>

        <View style={styles.clock}>
          {/* <AnalogClock/> */}
          <View style={styles.clockContainer}>
            <AnalogClock
              size={wp("30%")}
              colorClock={colors.PowderBlue}
              colorNumber={colors.Teal}
              colorCenter={colors.softmint}
              colorHour={colors.Teal}
              colorMinutes={colors.BluishTurquoise}
              colorSeconds={colors.silver}
              autostart={true}
              showSeconds
            />
          </View>

          <View style={styles.tasklist}>
            <Text style={styles.boldtext3}> Task list </Text>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.textdaily}>Daily Task</Text>

          <View style={styles.plusmain}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={images.plus} />
            </TouchableOpacity>
          </View>

          {/* //FlatList */}
          <View style={styles.sideContent}>
            <FlatList
              data={todoList}
              renderItem={renderTodoItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Todo modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Enter a new todo"
              value={newTodo}
              onChangeText={(text) => setNewTodo(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={addTodo}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DashboardScreen;
