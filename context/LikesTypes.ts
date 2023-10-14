type LikesContextType = {
  maleLikes: number;
  femaleLikes: number;
  otherLikes: number;
  likedCharacters: string[];
  toggleLike: (characterName: string, gender: string) => void;
  clearLikes: () => void;
};
export type { LikesContextType };
