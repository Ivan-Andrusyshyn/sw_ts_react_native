import { Character } from "../../context/characterTypes";
import {
  TouchableOpacity,
  View,
  Text,
  GestureResponderEvent,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
interface PropCharItem {
  character: Character;
  navigateToCharacterDetail: (characterIndex: string) => void;
  clickedHearts: Set<string>;
  toggleLike: (characterName: string, gender: string) => void;
}

const CharacterItem: React.FC<PropCharItem> = ({
  character,
  navigateToCharacterDetail,
  clickedHearts,
  toggleLike,
}) => {
  const handleLikedItems = (e: GestureResponderEvent, name: string) => {
    toggleLike(name, character.gender);
  };

  return (
    <TouchableOpacity onPress={() => navigateToCharacterDetail(character.url)}>
      <View style={styles.characterItemContainer}>
        <TouchableOpacity onPress={(e) => handleLikedItems(e, character.name)}>
          <MaterialCommunityIcons
            name={clickedHearts.has(character.name) ? "heart" : "heart-outline"}
            size={20}
            color={clickedHearts.has(character.name) ? "red" : "gray"}
          />
        </TouchableOpacity>
        <View style={styles.charInfo}>
          <Text style={styles.characterField}>{character.name}</Text>
          <Text style={styles.characterField}>{character.birth_year}</Text>
          <Text style={styles.characterField}>{character.gender}</Text>
          <Text style={styles.characterField}>{character.homeworld}</Text>
          <Text style={styles.characterField}>{character.species}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterItem;
