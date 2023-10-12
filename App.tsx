import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Routes/StackNavigator";
import { CharacterProvider } from "./context/CharacterContext";
import { LikesProvider } from "./context/LikesContext";

const App: React.FC = () => {
  return (
    <CharacterProvider>
      <LikesProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </LikesProvider>
    </CharacterProvider>
  );
};

export default App;
