import { Character } from "../../context/characterTypes";

interface PropCharItem {
  character: Character;
  navigateToCharacterDetail: (characterIndex: string) => void;
  likedCharacters: string[];
  toggleLike: (characterName: string, gender: string) => void;
}
export type { PropCharItem };
