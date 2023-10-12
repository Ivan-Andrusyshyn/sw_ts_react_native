import React, { createContext, useContext, ReactNode, useState } from "react";
import { LikesContextType } from "./LikesTypes";

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export const LikesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [maleLikes, setMaleLikes] = useState(0);
  const [femaleLikes, setFemaleLikes] = useState(0);
  const [otherLikes, setOtherLikes] = useState(0);
  const [likedCharacters, setLikedCharacters] = useState<Set<string>>(
    new Set()
  );
  const [clickedHearts, setClickedHearts] = useState<Set<string>>(new Set());

  const toggleLike = (characterName: string, gender: string) => {
    setLikedCharacters((prevLikedCharacters) => {
      const updatedLikedCharacters = new Set(prevLikedCharacters);
      if (prevLikedCharacters.has(characterName)) {
        updatedLikedCharacters.delete(characterName);
        if (gender === "male") {
          setMaleLikes(maleLikes - 1);
        } else if (gender === "female") {
          setFemaleLikes(femaleLikes - 1);
        } else {
          setOtherLikes(otherLikes - 1);
        }
      } else {
        updatedLikedCharacters.add(characterName);
        if (gender === "male") {
          setMaleLikes(maleLikes + 1);
        } else if (gender === "female") {
          setFemaleLikes(femaleLikes + 1);
        } else {
          setOtherLikes(otherLikes + 1);
        }
      }
      setClickedHearts(updatedLikedCharacters);
      return updatedLikedCharacters;
    });
  };
  const clearLikes = () => {
    setLikedCharacters(new Set());
    setMaleLikes(0);
    setFemaleLikes(0);
    setOtherLikes(0);
    setClickedHearts(new Set());
  };

  return (
    <LikesContext.Provider
      value={{
        maleLikes,
        femaleLikes,
        otherLikes,
        clickedHearts,
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
