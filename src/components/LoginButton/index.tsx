import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
};

export function LoginButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
}