import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CharacterListScreen from "../screens/CharList";
import CharacterDetailScreen from "../screens/ChaeDetails";
import { Button } from "react-native";
import ClearLikesBtn from "../Components/ClearBtn";

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Fans"
        component={CharacterListScreen}
        options={{
          headerStyle: {
            height: 80,
            backgroundColor: "#d1af6c",
          },
          headerTintColor: "#fff",
          headerRight: () => <ClearLikesBtn />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={CharacterDetailScreen}
        options={{
          headerStyle: {
            height: 80,
            backgroundColor: "#d1af6c",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
