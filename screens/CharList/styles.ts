import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingRight: 4,
    paddingLeft: 4,
    backgroundColor: "#f6f5f3",
    justifyContent: "space-between",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  characterField: {
    flex: 1,
    textAlign: "center",
  },
});

export default styles;
