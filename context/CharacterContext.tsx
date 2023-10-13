import axios from "axios";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import {
  Character,
  CharacterContextType,
  CharacterDetails,
} from "./characterTypes";

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [countItems, setCountItems] = useState("");
  const [characterDetails, setCharacterDetails] =
    useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  const fetchCharacters = async (pageNumber: number) => {
    try {
      if (pageNumber > 9) return;

      setLoading(true);

      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${pageNumber}`
      );
      const characterData = response.data.results;

      const characterInfoPromises = characterData.map(
        async (character: any) => {
          const { name, birth_year, gender, url, homeworld, species } =
            character;
          const [homeworldData, speciesData] = await Promise.all([
            axios
              .get(homeworld)
              .then((response) => response.data)
              .catch(() => null),
            species.length > 0
              ? axios
                  .get(species[0])
                  .then((response) => response.data)
                  .catch(() => null)
              : null,
          ]);

          return {
            name,
            birth_year,
            gender,
            url,
            homeworld: homeworldData ? homeworldData.name : "...",
            species: speciesData ? speciesData.name : "",
          };
        }
      );

      const characterInfo = await Promise.all(characterInfoPromises);
      setCountItems(response.data.count);
      setCharacters(characterInfo);
      setFilteredCharacters(characterInfo);
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(1);
  }, []);
  const loadCharacterDetails = async (characterUrl: string) => {
    setLoading(true);
    try {
      const response = await axios.get(characterUrl);
      const characterData = response.data;
      const extractedData = {
        name: characterData.name,
        height: characterData.height,
        mass: characterData.mass,
        hair_color: characterData.hair_color,
        skin_color: characterData.skin_color,
        eye_color: characterData.eye_color,
        birth_year: characterData.birth_year,
        gender: characterData.gender,
      };

      setCharacterDetails(extractedData);
      setLoading(false);
    } catch (error) {
      console.error("API error:", error);
      setLoading(false);
    }
  };

  const applySearchFilter = (text: string) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const sortCharactersAlphabetically = (direction: "asc" | "desc" | "none") => {
    const sorted = [...filteredCharacters].sort((a, b) => {
      return direction === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setFilteredCharacters(direction === "none" ? characters : sorted);
  };

  return (
    <CharacterContext.Provider
      value={{
        filteredCharacters,
        loading,
        setCharacters,
        characterDetails,
        fetchCharacters,
        loadCharacterDetails,
        countItems,
        applySearchFilter,
        sortCharactersAlphabetically,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error(
      "useCharacterContext must be used within a CharacterProvider"
    );
  }
  return context;
};
