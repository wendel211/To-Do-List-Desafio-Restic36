import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 8,
    bottom: 8,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#6F3CC3",
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    flexDirection: "row",
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
});
