import { Feather } from "@expo/vector-icons";
import { Container, TaskDone, TaskText, TaskDelete } from "./styles";
import { TaskProps, RootStackParamList } from "../../utils/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

type Props = NativeStackNavigationProp<RootStackParamList>;

export function Task(props: TaskProps) {
  const { selectTask } = useContext(TaskContext);

  return (
    <Container style={props.status ? { backgroundColor: "#D1CBD7" } : {}}>
      {/* Ícone de Tarefa Completa/Incompleta */}
      <TaskDone onPress={props.onCheck} completed={props.status}>
        <Feather
          name={props.status ? "check-circle" : "circle"}
          size={24}
          color={props.status ? "#0E9577" : "#9359F3"}
        />
      </TaskDone>

      {/* Texto da Tarefa */}
      <TaskText
        numberOfLines={
          10
        } /* Ajustar a altura conforme o texto quebra em várias linhas */
        ellipsizeMode="tail"
        style={props.status ? { textDecorationLine: "line-through" } : {}}
      >
        {props.title}
      </TaskText>

      {/* Botão de Excluir */}
      <TaskDelete onPress={props.onRemove}>
        <Feather name="trash-2" size={24} color="#6B6572" />
      </TaskDelete>
    </Container>
  );
}
