import {
  TouchableOpacity,
  View,
  GestureResponderEvent,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { DataTable } from "react-native-paper";
import { PropCharItem } from "./types";

const CharacterItem: React.FC<PropCharItem> = ({
  character,
  navigateToCharacterDetail,
  likedCharacters,
  toggleLike,
}) => {
  const isLiked = likedCharacters.includes(character.name);

  const handleLikedItems = (e: GestureResponderEvent, name: string) => {
    toggleLike(name, character.gender);
  };

  return (
    <View style={styles.characterItemContainer}>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={(e) => handleLikedItems(e, character.name)}
      >
        <MaterialCommunityIcons
          name={isLiked ? "heart" : "heart-outline"}
          size={20}
          color={isLiked ? "red" : "gray"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemInfoContainer}
        onPress={() => navigateToCharacterDetail(character.url)}
      >
        <DataTable.Row style={styles.charInfo}>
          <DataTable.Cell style={styles.characterMain}>
            {character.name}
          </DataTable.Cell>

          <DataTable.Cell style={styles.characterMain}>
            {character.gender}
          </DataTable.Cell>
          <DataTable.Cell style={styles.characterField}>
            {character.homeworld}
          </DataTable.Cell>
          <DataTable.Cell style={styles.characterField}>
            {character.birth_year}
          </DataTable.Cell>
          <DataTable.Cell style={styles.characterField}>
            {character.species}
          </DataTable.Cell>
        </DataTable.Row>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterItem;
