import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  const data = require("../../../data.json");

  return (
    <ScrollView>
      {data.map((event) => {
        return (
          <TouchableOpacity
            key={event.title}
            onPress={() => navigation.navigate("Detail")}
          >
            <Image
              style={{ width: 360, height: 360, alignSelf: "center" }}
              source={{ uri: event.img }}
            />
            <Text style={{ fontSize: 24, textAlign: "center", marginTop: 8 }}>
              {event.title}
            </Text>
            <Text
              style={{ color: "gray", textAlign: "center", marginBottom: 16 }}
            >
              {event.startDate}~{event.endDate}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
