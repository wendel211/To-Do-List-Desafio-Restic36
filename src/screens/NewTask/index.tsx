import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import { TaskContext } from "../../context/TaskContext";
import { SaveTaskButton } from "../../components/SaveTaskButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as Yup from "yup";
import { Formik } from "formik";

// Schema de validação da tarefa
const TaskSchema = Yup.object().shape({
  taskText: Yup.string()
    .min(4, "No mínimo 4 caracteres")
    .max(256, "No máximo 256 caracteres")
    .required("Tarefa não pode ser vazia"),
});

const NewTask = () => {
  const { createTask } = useContext(TaskContext);
  const navigation = useNavigation();
  const route = useRoute();
  const showAlert = route.params?.showAlert;

  const handleSaveTask = (taskText, resetForm) => {
    if (taskText.trim()) {
      createTask(taskText);
      showAlert("Uma nova tarefa foi criada!", "success");
      resetForm();
      navigation.goBack();
    }
  };

  const handleBackToHome = () => {
    navigation.goBack();
  };

  return (
    
    <SafeAreaView style={styles.container}>
      

      <Text style={styles.title}>Criar nova tarefa</Text>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
          <Feather name="arrow-left" size={24} color="#6F3CC3" />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <Formik
        initialValues={{ taskText: "" }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          handleSaveTask(values.taskText, resetForm);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Digite o título da tarefa"
              value={values.taskText}
              onChangeText={handleChange("taskText")}
              maxLength={256} // Limite de 256 caracteres no campo de texto
              multiline
            />

            {touched.taskText && errors.taskText && (
              <Text style={styles.errorText}>{errors.taskText}</Text>
            )}

            <View style={styles.footer}>
              {/* Contador de caracteres */}
              <Text style={styles.charCount}>{values.taskText.length}/256</Text>

              {/* Botão de salvar */}
              <SaveTaskButton onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: "#fefefe",
  },
  header: {
    marginBottom: 24,
  },
  backButton: {
    flexDirection: "row",
    alignSelf: "left",
    

  },
  backButtonText: {
    color: "#6F3CC3",
    fontSize: 16,
    marginLeft: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    textAlignVertical: "top",
    marginBottom: 8,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  charCount: {
    color: "#6B6572",
    fontSize: 14,
  },
});
