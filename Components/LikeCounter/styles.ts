import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  charHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    padding: 10,
  },
  likeCounterContainer: {
    alignItems: "center",
  },
  likeWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "22%",
    gap: 10,
  },
  likeCounterText: {
    fontSize: 12,
    color: "#333",
  },
  likeButtonText: {
    color: "rgb(211, 47, 47)",
    fontSize: 12,
  },
  likeBtnClean: {
    borderColor: "rgb(211, 47, 47)",
    borderWidth: 1,
    padding: 5,
  },
});
export default styles;
