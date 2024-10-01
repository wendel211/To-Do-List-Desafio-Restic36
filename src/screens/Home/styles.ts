import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    padding: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F3CC3",
    marginLeft: 8,
  },
  backButton: {

    //quero que fique na esquerda
    flexDirection: "row",
    alignItems: "center",
    
  
  },
  backButtonText: {
    color: "#6F3CC3",
    fontSize: 16,
    marginLeft: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 16,
  },
  tasks: {
    flex: 1,
  },
  listEmptyComponent: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginTop: 32,
  },
  listEmptyComponentText: {
    color: "#555",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  listEmptyComponentSubText: {
    color: "#888",
    fontSize: 14,
    textAlign: "center",
  },
  footer: {
    marginTop: 16,
  },
});
