import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Stack/Home";
import Detail from "./Stack/Detail";

const Stack = createStackNavigator();

export default function EventScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
