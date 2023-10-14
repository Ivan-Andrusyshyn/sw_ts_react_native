import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { LikesContextType } from "./LikesTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export const LikesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [maleLikes, setMaleLikes] = useState(0);
  const [femaleLikes, setFemaleLikes] = useState(0);
  const [otherLikes, setOtherLikes] = useState(0);
  const [likedCharacters, setLikedCharacters] = useState<string[]>([]);

  const toggleLike = (characterName: string, gender: string) => {
    const updatedLikedCharacters = likedCharacters.slice();
    if (updatedLikedCharacters.includes(characterName)) {
      updatedLikedCharacters.splice(
        updatedLikedCharacters.indexOf(characterName),
        1
      );
      if (gender === "male") {
        setMaleLikes(maleLikes - 1);
      } else if (gender === "female") {
        setFemaleLikes(femaleLikes - 1);
      } else {
        setOtherLikes(otherLikes - 1);
      }
    } else {
      updatedLikedCharacters.push(characterName);
      if (gender === "male") {
        setMaleLikes(maleLikes + 1);
      } else if (gender === "female") {
        setFemaleLikes(femaleLikes + 1);
      } else {
        setOtherLikes(otherLikes + 1);
      }
    }
    setLikedCharacters(updatedLikedCharacters);
  };

  const clearLikes = () => {
    setLikedCharacters([]);
    setMaleLikes(0);
    setFemaleLikes(0);
    setOtherLikes(0);
  };

  useEffect(() => {
    const loadLikesFromStorage = async () => {
      try {
        const storedMaleLikes = await AsyncStorage.getItem("maleLikes");
        const storedFemaleLikes = await AsyncStorage.getItem("femaleLikes");
        const storedOtherLikes = await AsyncStorage.getItem("otherLikes");
        const storedLikedCharacters = await AsyncStorage.getItem(
          "likedCharacters"
        );

        if (storedMaleLikes) setMaleLikes(parseInt(storedMaleLikes));
        if (storedFemaleLikes) setFemaleLikes(parseInt(storedFemaleLikes));
        if (storedOtherLikes) setOtherLikes(parseInt(storedOtherLikes));
        if (storedLikedCharacters)
          setLikedCharacters(JSON.parse(storedLikedCharacters));
      } catch (error) {
        console.error("Error loading likes from storage:", error);
      }
    };

    loadLikesFromStorage();
  }, []);

  useEffect(() => {
    const saveLikesToStorage = async () => {
      try {
        await AsyncStorage.setItem("maleLikes", maleLikes.toString());
        await AsyncStorage.setItem("femaleLikes", femaleLikes.toString());
        await AsyncStorage.setItem("otherLikes", otherLikes.toString());
        await AsyncStorage.setItem(
          "likedCharacters",
          JSON.stringify(likedCharacters)
        );
      } catch (error) {
        console.error("Error saving likes to storage:", error);
      }
    };

    saveLikesToStorage();
  }, [maleLikes, femaleLikes, otherLikes, likedCharacters]);

  return (
    <LikesContext.Provider
      value={{
        maleLikes,
        femaleLikes,
        likedCharacters,
        otherLikes,
        toggleLike,
        clearLikes,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export const useLikesContext = () => {
  const context = useContext(LikesContext);
  if (context === undefined) {
    throw new Error("useLikesContext must be used within a LikesProvider");
  }
  return context;
};
