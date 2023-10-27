import React, { useState } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useCharacterContext } from "../../context/CharacterContext";
import styles from "./styles";
import { DataTable } from "react-native-paper";
import tableHeaders from "./tableData";

const CharHeader = () => {
  const { sortCharactersAlphabetically } = useCharacterContext();
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | "none">(
    "none"
  );

  const handleSortClick = () => {
    let newSortDirection: "asc" | "desc" | "none";
    if (sortDirection === "asc") {
      newSortDirection = "desc";
    } else if (sortDirection === "desc") {
      newSortDirection = "none";
    } else {
      newSortDirection = "asc";
    }
    sortCharactersAlphabetically(newSortDirection);
    setSortDirection(newSortDirection);
  };
  const handleChangeIcon = () => {
    if (sortDirection === "asc") {
      return <AntDesign name="arrowup" size={16} color="#BDBDBD" />;
    } else if (sortDirection === "desc") {
      return <AntDesign name="arrowdown" size={16} color="#BDBDBD" />;
    }
  };
  return (
    <ScrollView horizontal={true}>
      <DataTable style={styles.tableHeader}>
        <DataTable.Header style={styles.tableContainer}>
          {tableHeaders.map((header, index) => (
            <DataTable.Title
              key={index}
              style={
                header.label === "heart"
                  ? styles.tableNameTitle
                  : styles.tableTitle
              }
            >
              {header.label === "Name" ? (
                <TouchableOpacity
                  onPress={handleSortClick}
                  style={styles.nameWrapper}
                >
                  <Text style={styles.headerOptionsText}>{header.label}</Text>
                  {handleChangeIcon()}
                </TouchableOpacity>
              ) : header.label === "heart" ? (
                <MaterialCommunityIcons
                  name={header.label}
                  size={20}
                  color="#000"
                />
              ) : (
                header.label
              )}
            </DataTable.Title>
          ))}
        </DataTable.Header>
      </DataTable>
    </ScrollView>
  );
};

export default CharHeader;
