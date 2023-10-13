import React from "react";
import { useCharacterContext } from "../../context/CharacterContext";
import { ActivityIndicator, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

interface PropsChar {
  label: string;
  value: string;
  color?: string;
}
const CharacterDetailScreen: React.FC = () => {
  const { loading, characterDetails } = useCharacterContext();

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
          <Text style={styles.characterName}>
            Name: {characterDetails.name}
          </Text>
          <View style={styles.mainWrapper}>
            <View style={styles.avatarWrapper}>
              <Ionicons name="person-outline" size={84} color="#777" />
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
                label="Hair Color"
                value={characterDetails.hair_color}
                color={characterDetails.hair_color}
              />
              <CharacterInfoItem
                label="Skin Color"
                value={characterDetails.skin_color}
                color={characterDetails.skin_color}
              />
              <CharacterInfoItem
                label="Eye Color"
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
