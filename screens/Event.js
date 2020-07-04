import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function EventScreen() {
  const data = require("../data.json");

  return (
    <ScrollView>
      {data.map((event) => {
        return <Text key={event.title}>{event.title}</Text>;
      })}
    </ScrollView>
  );
}
