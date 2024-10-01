import React, { useState, useContext, useMemo,useCallback } from "react";
import { FlatList, Text, View, SafeAreaView, TouchableOpacity, } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CardNumber } from "../../components/CardNumber";
import { Task } from "../../components/Task";
import { TaskContext } from "../../context/TaskContext";
import { SearchTask } from "../../components/SearchTask";
import { CreateTaskButton } from "../../components/CreateTaskButton";
import { AlertPersonalizado } from "../../components/AlertPersonalizado";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { ModalDeleteTask } from "../../components/ModalDeleteTask";

export default function Home() {
  const { tasks, handleTaskChangeStatus, handleTaskDelete, searchTasks } =
    useContext(TaskContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const navigation = useNavigation();
  const [alert, setAlert] = useState({
    visible: false,
    message: "",
    type: "success",
  });
  

  const { filteredTasks, countTask, countDone } = useMemo(() => {
    const filtered = searchTasks(searchQuery);
    const sorted = [...filtered].sort((a, b) => {
      if (a.status === b.status) return 0;
      return a.status ? 1 : -1;
    });

    return {
      filteredTasks: sorted,
      countTask: filtered.length,
      countDone: filtered.filter((task) => task.status).length,
    };
  }, [tasks, searchQuery]);

  const showAlert = useCallback(
    (message: string, type: "success" | "error") => {
      setAlert({ visible: true, message, type });
      setTimeout(
        () => setAlert({ visible: false, message: "", type: "success" }),
        3000
      );
    },
    []
  );

  const handleBackToHome = () => {
    navigation.goBack();
  };

  const confirmTaskDelete = (task) => {
    setTaskToDelete(task);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      handleTaskDelete(taskToDelete);
      setModalVisible(false);
      showAlert("Tarefa excluída com sucesso!", "error");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
   
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Feather name="clipboard" size={24} color="#6F3CC3" />
        <Text style={styles.headerText}>To Do List</Text>
      </View>

      <Text style={styles.greeting}>Olá!</Text>

      <SearchTask onChangeText={setSearchQuery} value={searchQuery} />

      <View style={styles.cardContainer}>
        <CardNumber
          title="Tarefas criadas"
          num={countTask}
          color="#6F3CC3"
          background="#DDD2EF"
        />
        <CardNumber
          title="Concluídas"
          num={countDone}
          color="#2D6C4A"
          background="#BFE3D0"
        />
      </View>

      <FlatList
        style={styles.tasks}
        data={filteredTasks}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            title={item.title}
            status={item.status}
            onCheck={() => handleTaskChangeStatus(item)}
            onRemove={() => confirmTaskDelete(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyComponent}>
            <Feather name="clipboard" size={50} color="#555" />
            <Text style={styles.listEmptyComponentText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyComponentSubText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <CreateTaskButton
          onPress={() => navigation.navigate("NewTask", { showAlert })}
        />
      </View>

      <AlertPersonalizado
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
        backgroundColor={alert.type === "success" ? "#BFE3D0" : "#E0DCE4"}
      />

      <ModalDeleteTask
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </SafeAreaView>
  );

  
}
