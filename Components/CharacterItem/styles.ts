import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  characterItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingRight: 16,
  },
  characterField: {
    flex: 1,
    fontSize: 10,
    textAlign: "center",
  },
  charInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  itemInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
  },
  iconWrapper: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 8,
    alignItems: "center",
    height: "100%",
    flexDirection: "row",
  },
});
export default styles;
