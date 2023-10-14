import { TouchableHighlight, Text } from "react-native";
import styles from "./styles";
import { useLikesContext } from "../../context/LikesContext";
const ClearLikesBtn = () => {
  const { clearLikes } = useLikesContext();
  return (
    <TouchableHighlight
      style={styles.likeBtnClean}
      onPress={clearLikes}
      underlayColor="rgba(211, 47, 47, 0.075)"
    >
      <Text style={styles.likeButtonText}>CLEAR FANS</Text>
    </TouchableHighlight>
  );
};
export default ClearLikesBtn;
