import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 0,
    paddingRight: 4,
    paddingLeft: 4,
    flex: 1,
    backgroundColor: "#f6f5f3",
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
  tableList: {
    paddingVertical: 0,
    width: 415,
    flex: 1,
    paddingHorizontal: 0,
    borderLeftColor: "#ccc",
    borderLeftWidth: 1,
  },
});

export default styles;
