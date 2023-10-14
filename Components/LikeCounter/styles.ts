import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  charHeaderContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    height: 60,
    gap: 8,
  },
  likeCounterContainer: {
    alignItems: "center",
    borderColor: "#ccc",
    flexDirection: "row",
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  likeCounterText: {
    fontSize: 12,
    color: "#333",
  },
});

export default styles;
