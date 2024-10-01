import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "./styles";

type ModalDeleteTaskProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ModalDeleteTask: React.FC<ModalDeleteTaskProps> = ({
  visible,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            Tem certeza de que deseja excluir essa tarefa?
          </Text>

          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton} onPress={onConfirm}>
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
