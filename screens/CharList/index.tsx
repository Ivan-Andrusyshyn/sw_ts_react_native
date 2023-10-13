import React, { useState, useEffect, useCallback } from "react";
import { FlatList, ActivityIndicator, View, Text } from "react-native";
import CharacterItem from "../../Components/CharacterItem/index";
import Pagination from "../../Components/Pagination";
import CharHeader from "../../Components/CharHeader";
import LikeCounter from "../../Components/LikeCounter";
import CharSearch from "../../Components/CharSearch";
import { useLikesContext } from "../../context/LikesContext";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useCharacterContext } from "../../context/CharacterContext";

const CharacterListScreen: React.FC = () => {
  const {
    filteredCharacters,
    fetchCharacters,
    loadCharacterDetails,
    countItems,
    loading,
  } = useCharacterContext();
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const {
    maleLikes,
    femaleLikes,
    otherLikes,
    clickedHearts,
    toggleLike,
    clearLikes,
  } = useLikesContext();

  const navigateToCharacterDetail = (characterName: string) => {
    loadCharacterDetails(characterName);
    navigation.navigate("CharacterDetail" as never);
  };

  const changePage = (pageNumber: number) => {
    setPage(pageNumber);
    fetchCharacters(pageNumber);
  };

  return (
    <View style={styles.container}>
      <LikeCounter
        maleLikes={maleLikes}
        femaleLikes={femaleLikes}
        otherLikes={otherLikes}
        clearLikes={clearLikes}
      />
      <CharHeader />
      <CharSearch />
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#ccc" />
        </View>
      ) : (
        <FlatList
          data={filteredCharacters}
          keyExtractor={(character) => character.name}
          renderItem={({ item }) => (
            <CharacterItem
              character={item}
              toggleLike={toggleLike}
              navigateToCharacterDetail={navigateToCharacterDetail}
              clickedHearts={clickedHearts}
            />
          )}
          onEndReachedThreshold={0.1}
        />
      )}

      {filteredCharacters.length > 0 && (
        <Pagination
          page={page}
          changePage={changePage}
          countItems={Number(countItems)}
        />
      )}
    </View>
  );
};

export default CharacterListScreen;
