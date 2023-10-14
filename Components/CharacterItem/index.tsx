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
  likedCharacters: string[];
  toggleLike: (characterName: string, gender: string) => void;
}

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
        <View style={styles.charInfo}>
          <Text style={styles.characterField}>{character.name}</Text>
          <Text style={styles.characterField}>{character.birth_year}</Text>
          <Text style={styles.characterField}>{character.gender}</Text>
          <Text style={styles.characterField}>{character.homeworld}</Text>
          <Text style={styles.characterField}>{character.species}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterItem;
