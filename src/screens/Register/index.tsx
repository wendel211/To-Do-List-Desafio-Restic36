import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const RegisterScreen = () => {
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleRegister = () => {
    if (apelido.length > 4 && email.length > 0 && senha.length > 4) {
      Alert.alert(
        "Registro Bem-sucedido",
        "Sua conta foi criada com sucesso!",
        [       
          { 
            text: "OK", 
            onPress: () => navigation.navigate("Login") 
          }
        ]
      );
    } else {
      Alert.alert(
        "Erro no Registro", 
        "Por favor, preencha todos os campos corretamente. O apelido e a senha devem ter mais de 4 caracteres."
      );
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Feather name="clipboard" size={36} color="#6F3CC3" />
          <Text style={styles.headerText}>To Do List</Text>
        </View>
        <Text style={[styles.headerText, { fontSize: 24, marginBottom: 10 }]}>Inscreva-se</Text>
        
        <Text style={styles.labelText}>Digite seu apelido:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu apelido"
          value={apelido}
          onChangeText={setApelido}
          autoCapitalize="none"
        />

        <Text style={styles.labelText}>Digite seu e-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.labelText}>Digite sua senha:</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
            value={senha}
            onChangeText={setSenha}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
            <Feather name={showPassword ? "eye-off" : "eye"} size={20} color="#6F3CC3" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>Já possui login? Entrar</Text>
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
    paddingTop: 40,
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
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F3CC3",
    marginLeft: 8,
  },
  labelText: {
    color: '#000000',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 5,
  },
  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  passwordContainer: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  registerButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#6F3CC3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#6F3CC3',
    fontSize: 14,
    marginTop: 15,
  },
});

export default RegisterScreen;