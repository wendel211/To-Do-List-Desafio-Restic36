import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
};

export function CreateTaskButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Criar</Text>
      <Feather name="plus" size={24} color="#FFF" />
    </TouchableOpacity>
  );
}
