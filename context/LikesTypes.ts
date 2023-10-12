type LikesContextType = {
  maleLikes: number;
  femaleLikes: number;
  otherLikes: number;
  clickedHearts: Set<string>;
  toggleLike: (characterName: string, gender: string) => void;
  clearLikes: () => void;
};
export type { LikesContextType };
