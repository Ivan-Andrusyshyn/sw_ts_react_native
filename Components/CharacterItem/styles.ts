import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  characterItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 16,
  },
  characterField: {
    flex: 1,
    fontSize: 10,
    textAlign: "center",
  },
  charInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    justifyContent: "space-between",
  },
});
export default styles;
