import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 16,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#EB5757",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
