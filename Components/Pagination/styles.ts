import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 25,
    paddingBottom: 25,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  paginationContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  buttonPagination: {
    width: 40,
  },
});
export default styles;
