import React, { createContext, useState, useEffect } from "react";
import { TaskProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TaskContextProps {
  task: TaskProps;
  tasks: TaskProps[];
  selectTask: (task: TaskProps) => void;
  clearTask: () => void;
  createTask: (title: string) => void;
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  handleTaskChangeStatus: (taskToChange: TaskProps) => void;
  handleTaskDelete: (taskToDelete: TaskProps) => void;
  searchTasks: (searchQuery: string) => TaskProps[]; // Adicionado o retorno da função
}

interface TaskProviderProps {
  children: React.ReactNode;
}

// Cria o contexto com um valor padrão
export const TaskContext = createContext<TaskContextProps>({
  task: { id: 0, title: "", status: false },
  tasks: [],
  selectTask: () => {},
  clearTask: () => {},
  createTask: () => {},
  setTasks: () => {},
  handleTaskChangeStatus: () => {},
  handleTaskDelete: () => {},
  searchTasks: () => [], // Corrigido para retornar um array vazio por padrão
});

export function TaskProvider({ children }: TaskProviderProps) {
  // Estado para a tarefa atualmente selecionada
  const [task, setTask] = useState<TaskProps>({
    id: 0,
    title: "",
    status: false,
  });

  // Estado para todas as tarefas
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  // Função para armazenar as tarefas no AsyncStorage
  async function storeTasks(tasks: TaskProps[]) {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Erro ao salvar as tarefas:", error);
    }
  }

  // Função para carregar as tarefas do AsyncStorage
  async function loadTasks() {
    try {
      const storedTasks = await AsyncStorage.getItem("@tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Erro ao carregar as tarefas:", error);
    }
  }

  // Carregar as tarefas quando o componente é montado
  useEffect(() => {
    loadTasks();
  }, []);

  // Armazenar as tarefas sempre que elas mudarem
  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  // Função para criar uma nova tarefa
  function createTask(title: string) {
    const newTask: TaskProps = {
      id: Date.now(), // Usa o timestamp atual como um ID único
      title,
      status: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // Função para selecionar uma tarefa
  function selectTask(task: TaskProps) {
    setTask(task);
  }

  // Função para limpar a tarefa selecionada
  function clearTask() {
    setTask({ id: 0, title: "", status: false });
  }

  // Função para lidar com a mudança de status da tarefa
  function handleTaskChangeStatus(taskToChange: TaskProps) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskToChange.id ? { ...task, status: !task.status } : task
      )
    );
  }

  // Função para lidar com a exclusão de tarefas
  function handleTaskDelete(taskToDelete: TaskProps) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete.id)
    );
  }

  // Função para lidar com a busca de tarefas usando filtro
  function searchTasks(searchQuery: string) {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filteredTasks;
  }

  return (
    <TaskContext.Provider
      value={{
        task,
        tasks,
        selectTask,
        clearTask,
        createTask,
        setTasks,
        handleTaskChangeStatus,
        handleTaskDelete,
        searchTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
