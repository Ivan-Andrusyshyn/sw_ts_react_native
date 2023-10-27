import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tableHeader: {
    display: "flex",
    paddingVertical: 0,
    borderWidth: 1,
    width: 410,
    borderColor: "#ccc",
  },
  iconHeart: {
    width: 20,
  },
  headerOptions: {},
  headerOptionsName: {
    flexDirection: "row",
    width: 40,
  },
  headerOptionsText: {
    color: "rgba(28, 27, 31, 0.6)",
    fontSize: 12,
    lineHeight: 24,
    marginTop: 2,
    fontWeight: "600",
  },
  tableContainer: {
    paddingHorizontal: 0,
    paddingLeft: 16,
  },
  tableNameTitle: {
    flex: 0,
    display: "flex",
    alignItems: "center",
    width: 38,
  },
  tableTitle: {
    justifyContent: "center",
    flex: 1,
    borderLeftWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,

    borderLeftColor: "#ccc",
  },
  nameWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default styles;
