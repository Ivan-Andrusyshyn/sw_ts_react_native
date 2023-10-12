import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useCharacterContext } from "../../context/CharacterContext";
import styles from "./styles";
const CharHeader = () => {
  const { sortCharactersAlphabetically } = useCharacterContext();
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | "none">(
    "none"
  );

  const handleSortClick = () => {
    if (sortDirection === "asc") {
      sortCharactersAlphabetically("desc");
      setSortDirection("desc");
    } else if (sortDirection === "desc") {
      sortCharactersAlphabetically("none");
      setSortDirection("none");
    } else {
      sortCharactersAlphabetically("asc");
      setSortDirection("asc");
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerOptionsLine}>
        <MaterialCommunityIcons name="heart" size={20} color="#000" />
      </View>
      <TouchableOpacity onPress={handleSortClick}>
        <View style={styles.headerOptionsLine}>
          <View style={styles.headerOptionsName}>
            <Text style={styles.headerOptions}>Name</Text>
            {sortDirection === "asc" ? (
              <AntDesign name="arrowup" size={16} color="#BDBDBD" />
            ) : sortDirection === "desc" ? (
              <AntDesign name="arrowdown" size={16} color="#BDBDBD" />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.headerOptionsLine}>
        <Text style={styles.headerOptions}>Birth Year</Text>
      </View>
      <View style={styles.headerOptionsLine}>
        <Text style={styles.headerOptions}>Gender</Text>
      </View>
      <View style={styles.headerOptionsLine}>
        <Text style={styles.headerOptions}>Home World</Text>
      </View>
      <View style={styles.headerOptionsLine}>
        <Text style={styles.headerOptions}>Species</Text>
      </View>
    </View>
  );
};

export default CharHeader;
