interface Character {
  name: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;
  species: string;
}
interface CharacterDetails {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
interface CharacterContextType {
  filteredCharacters: Character[];
  countItems: string;
  loading: boolean;
  sortCharactersAlphabetically: (direction: "asc" | "desc" | "none") => void;
  applySearchFilter: (text: string) => void;
  fetchCharacters: (pageNumber: number) => void;
  setCharacters: (characters: Character[]) => void;
  loadCharacterDetails: (characterId: string) => void;
  characterDetails: CharacterDetails | null;
}
export type { Character, CharacterContextType, CharacterDetails };
