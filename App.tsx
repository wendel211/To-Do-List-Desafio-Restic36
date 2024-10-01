  import { StatusBar } from "expo-status-bar";
  import * as React from "react";
  import { NavigationContainer } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import Home from "./src/screens/Home";
  import WelcomeScreen from "./src/screens/Welcome";
  import LoginScreen from "./src/screens/Login";
  import NewTask from "./src/screens/NewTask";
  import TaskProvider from "./src/context/TaskContext";

  export default function App() {
    const Stack = createNativeStackNavigator();
    return (
      <>
        <TaskProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="NewTask" component={NewTask} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </TaskProvider>
      </>
    );
  }
