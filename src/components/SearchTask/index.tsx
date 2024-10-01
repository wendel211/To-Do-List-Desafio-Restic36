import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, Input } from "./styles";

type Props = {
  onChangeText: (text: string) => void;
  value: string;
};

export function SearchTask({ onChangeText, value }: Props) {
  return (
    <Container>
      <Input
        placeholder="Buscar tarefa"
        placeholderTextColor="#A0A0A0"
        value={value}
        onChangeText={onChangeText}
      />
      <Feather name="search" size={20} color="#A0A0A0" />
    </Container>
  );
}
