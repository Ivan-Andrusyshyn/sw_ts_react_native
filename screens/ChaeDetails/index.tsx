import React, { useEffect, useState } from "react";
import { useCharacterContext } from "../../context/CharacterContext";
import { ActivityIndicator, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLikesContext } from "../../context/LikesContext";

interface PropsChar {
  label: string;
  value: string;
  color?: string;
}
const CharacterDetailScreen: React.FC = () => {
  const { loading, characterDetails } = useCharacterContext();
  const { toggleLike } = useLikesContext();

  const [likedName, setLikedName] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const loadLikedCharactersFromStorage = async () => {
    try {
      const storedLikedCharacters = await AsyncStorage.getItem(
        "likedCharacters"
      );
      if (storedLikedCharacters) {
        const parsedData = JSON.parse(storedLikedCharacters);
        setLikedName(parsedData);

        if (characterDetails) {
          const isLiked = parsedData.includes(characterDetails.name);
          setIsFavorite(isLiked);
        }
      }
    } catch (error) {
      console.error("Error loading liked characters from storage:", error);
    }
  };

  useEffect(() => {
    loadLikedCharactersFromStorage();
  }, [characterDetails]);

  const handleToggleLike = () => {
    if (characterDetails) {
      toggleLike(characterDetails.name, characterDetails.gender);
      setIsFavorite(!isFavorite);
    }
  };

  const CharacterInfoItem: React.FC<PropsChar> = ({ label, value, color }) => (
    <View style={styles.detailColor}>
      <Text style={styles.characterDetail}>
        {label}: {value}
      </Text>
      {color && (
        <View style={[styles.colorBlock, { backgroundColor: color }]} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" style={styles.loading} />
      ) : characterDetails ? (
        <View style={styles.characterInfo}>
          <Text style={styles.characterName}>{characterDetails.name}</Text>
          <View style={styles.mainWrapper}>
            <View>
              <View style={styles.avatarWrapper}>
                <Ionicons name="person-outline" size={84} color="#777" />
              </View>
              <View style={styles.favoriteWrapper}>
                <TouchableOpacity
                  onPress={handleToggleLike}
                  style={styles.mainWrapper}
                >
                  <View
                    style={{
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: isFavorite ? "#000" : "#666",
                      }}
                    >
                      Favorite
                    </Text>
                  </View>

                  <MaterialCommunityIcons
                    name={isFavorite ? "heart" : "heart-outline"}
                    size={20}
                    color={isFavorite ? "red" : "gray"}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.infoCharWrapper}>
              <CharacterInfoItem
                label="Birth Year"
                value={characterDetails.birth_year}
              />
              <CharacterInfoItem
                label="Gender"
                value={characterDetails.gender}
              />
              <CharacterInfoItem
                label="Height"
                value={`${characterDetails.height} cm`}
              />
              <CharacterInfoItem
                label="Mass"
                value={`${characterDetails.mass} kg`}
              />
              <CharacterInfoItem
                label="Hair"
                value={characterDetails.hair_color}
                color={characterDetails.hair_color}
              />
              <CharacterInfoItem
                label="Skin"
                value={characterDetails.skin_color}
                color={characterDetails.skin_color}
              />
              <CharacterInfoItem
                label="Eye"
                value={characterDetails.eye_color}
                color={characterDetails.eye_color}
              />
            </View>
          </View>
        </View>
      ) : (
        <Text style={styles.notFound}>Character not found</Text>
      )}
    </View>
  );
};

export default CharacterDetailScreen;
