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
    lineHeight: "22",
    textAlign: "center",
    borderLeftColor: "#ccc",
    borderLeftWidth: 1,
    display: "flex",
    paddingLeft: 0,
    justifyContent: "center",
    alignContent: "center",
  },
  characterMain: {
    borderLeftColor: "#ccc",
    borderLeftWidth: 1,
    justifyContent: "center",
    fontSize: 12,
  },
  charInfo: {
    flex: 1,
    paddingHorizontal: 0,
    paddingRight: 26,
  },
  itemInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconWrapper: {
    display: "flex",
    paddingHorizontal: 16,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
  },
});
export default styles;
