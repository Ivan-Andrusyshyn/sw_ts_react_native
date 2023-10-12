import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useCharacterContext } from "../../context/CharacterContext";
import styles from "./styles";
const CharSearch = () => {
  const [searchText, setSearchText] = useState("");
  const { applySearchFilter } = useCharacterContext();

  const handleSearch = (text: string) => {
    setSearchText(text);
    applySearchFilter(text);
  };

  return (
    <View style={styles.searchContainer}>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput
        style={styles.searchTextInput}
        placeholder="Search..."
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default CharSearch;
