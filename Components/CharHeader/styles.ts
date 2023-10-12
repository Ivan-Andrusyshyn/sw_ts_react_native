import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: "center",
  },
  headerOptions: {
    fontSize: 10,
  },
  headerOptionsName: {
    flexDirection: "row",
    width: 40,
  },
  headerOptionsLine: {
    borderRightWidth: 1,
    height: 40,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: "center",
    borderColor: "#ccc",
  },
});
export default styles;
