import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
interface PropsLikes {
  maleLikes: number;
  femaleLikes: number;
  otherLikes: number;
}

const LikeCounter: React.FC<PropsLikes> = ({
  maleLikes,
  femaleLikes,
  otherLikes,
}) => {
  return (
    <View style={styles.charHeaderContainer}>
      <View style={[styles.likeCounterContainer, styles.shadowProp]}>
        <Text style={styles.likeCounterText}>Male: {maleLikes}</Text>
      </View>
      <View style={[styles.likeCounterContainer, styles.shadowProp]}>
        <Text style={styles.likeCounterText}>Female: {femaleLikes}</Text>
      </View>
      <View style={[styles.likeCounterContainer, styles.shadowProp]}>
        <Text style={styles.likeCounterText}>Another: {otherLikes}</Text>
      </View>
    </View>
  );
};

export default LikeCounter;
