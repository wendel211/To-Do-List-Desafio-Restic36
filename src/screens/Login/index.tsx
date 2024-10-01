import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const LoginScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (login.length > 4 && password.length > 4) {
      Alert.alert(
        "Login Bem-sucedido",
        "Você foi autenticado com sucesso!",
        [       
          { 
            text: "OK", 
            onPress: () => navigation.navigate("Home") 
          }
        ]
      );
    } else {
      Alert.alert(
        "Erro de Login", 
        "O login deve ter mais de 4 caracteres e a senha deve ter mais de 4 dígitos."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Feather name="clipboard" size={36} color="#6F3CC3" />
          <Text style={styles.headerText}>To Do List</Text>
        </View>
        <Text style={[styles.headerText, { fontSize: 24 }]}>Login</Text>
        <Text style={styles.Text}>Digite seu apelido: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu apelido"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />
         <Text style={styles.Text}>Digite sua senha: </Text>
        <TextInput
        
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.registerText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F3CC3",
    marginLeft: 8,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  loginButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#6F3CC3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#6F3CC3',
    fontSize: 14,
    marginTop: 20,
  },
  Text: {
    color: '#000000',
    padding: 8,
    fontSize: 14,
    marginTop: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
  },
});

export default LoginScreen;
