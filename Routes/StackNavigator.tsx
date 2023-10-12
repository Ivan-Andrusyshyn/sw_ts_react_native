import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CharacterListScreen from "../screens/CharList";
import CharacterDetailScreen from "../screens/ChaeDetails";

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
            backgroundColor: "#a5884f",
          },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetailScreen}
        options={{
          headerStyle: {
            height: 80,
            backgroundColor: "#a5884f",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
