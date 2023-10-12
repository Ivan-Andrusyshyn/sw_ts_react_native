import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ccc",
  },
  characterInfo: {
    marginTop: 16,
    border: "1px solid #ddd",
    padding: 16,
  },
  characterName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#777",
    marginBottom: 16,
  },
  characterDetail: {
    fontSize: 16,
    color: "#555",
    padding: 5,
  },
  notFound: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginTop: 130,
  },
  detailColor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  infoCharWrapper: {
    marginLeft: 10,
  },
  mainWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  avatarWrapper: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 110,
    height: 110,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    flex: 1,
  },
  colorBlock: {
    width: 20,
    height: 20,
  },
});
export default styles;
