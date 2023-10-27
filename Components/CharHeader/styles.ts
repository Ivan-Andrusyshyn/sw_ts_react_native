import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tableHeader: {
    display: "flex",
    paddingVertical: 0,
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
    width: 40,
  },
  tableTitle: {
    justifyContent: "center",
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: "rgba(28, 27, 31, 0.6)",
  },
  nameWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default styles;
