import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "./styles";
interface PropsLikes {
  maleLikes: number;
  femaleLikes: number;
  otherLikes: number;
  clearLikes: () => void;
}

const LikeCounter: React.FC<PropsLikes> = ({
  maleLikes,
  femaleLikes,
  otherLikes,
  clearLikes,
}) => {
  return (
    <View style={styles.charHeaderContainer}>
      <View style={styles.likeWrapper}>
        <View style={styles.likeCounterContainer}>
          <Text style={styles.likeCounterText}>Male: {maleLikes}</Text>
        </View>
        <View style={styles.likeCounterContainer}>
          <Text style={styles.likeCounterText}>Female: {femaleLikes}</Text>
        </View>
        <View style={styles.likeCounterContainer}>
          <Text style={styles.likeCounterText}>Another: {otherLikes}</Text>
        </View>
        <TouchableHighlight
          style={styles.likeBtnClean}
          onPress={clearLikes}
          underlayColor="rgba(211, 47, 47, 0.075)"
        >
          <Text style={styles.likeButtonText}>CLEAR FANS</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LikeCounter;
