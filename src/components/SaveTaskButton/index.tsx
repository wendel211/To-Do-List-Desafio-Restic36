import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
};

export function SaveTaskButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Salvar</Text>
      <Feather name="check" size={24} color="#2D6C4A" />
    </TouchableOpacity>
  );
}
