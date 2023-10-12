import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
interface PropsPagination {
  page: number;
  changePage: (page: number) => void;
  countItems: number;
}

const Pagination: React.FC<PropsPagination> = ({
  page,
  changePage,
  countItems,
}) => {
  const itemsPerPage = 10;
  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, countItems);

  const showPrevButton = page > 1;
  const showNextButton = endItem < countItems;

  return (
    <View style={styles.pagination}>
      <View style={styles.paginationContainer}>
        <Text>{`${startItem} - ${endItem} of ${countItems}`}</Text>
        <TouchableOpacity
          style={styles.buttonPagination}
          onPress={() => {
            if (showPrevButton) {
              changePage(page - 1);
            }
          }}
        >
          <AntDesign
            name="left"
            size={18}
            color={!showPrevButton ? "#ccc" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPagination}
          onPress={() => {
            if (showNextButton) {
              changePage(page + 1);
            }
          }}
        >
          <AntDesign
            name="right"
            size={18}
            color={!showNextButton ? "#ccc" : "#000"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagination;
