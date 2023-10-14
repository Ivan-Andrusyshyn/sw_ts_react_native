import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#eee",
  },
  characterInfo: {
    marginTop: 16,
    borderColor: "#ddd",
    borderWidth: 1,
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
    padding: 2,
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
    borderWidth: 1,
    padding: 4,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  infoCharWrapper: {},
  mainWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  avatarWrapper: {
    borderWidth: 1,
    borderColor: "#777",
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
    width: 15,
    height: 15,
  },
  favoriteWrapper: {
    marginTop: 15,
    flexDirection: "row",
  },
});

export default styles;
