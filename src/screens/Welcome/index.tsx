import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { LoginButton } from "../../components/LoginButton";
import { RegisterButton } from "../../components/RegisterButton";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Feather name="clipboard" size={155} color="#6F3CC3" />
        </View>
        <Text style={styles.headerText}>To Do List</Text>
        <Text style={styles.welcomeText}>Comece a escrever suas ideias e tarefas! </Text>
        <View style={styles.buttonContainer}>
          <LoginButton onPress={() => navigation.navigate("Login")} />
          <RegisterButton onPress={() => navigation.navigate("Register")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 16,
    paddingTop: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6F3CC3',
    marginLeft: 8,
  },
  welcomeText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    color: 'gray',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default WelcomeScreen;