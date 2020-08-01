import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function MarketScreen() {
  const data = require("../marketdata.json");

  return (
    <ScrollView>
      {data.map((market) => {
        return (
          <>
            <SliderBox
              images={market.img1}
              autoplay={true}
              dotColor="#FF5733"
              sliderBoxHeight={400}
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
            />
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginTop: "8",
                  flexWrap: "wrap",
                }}
              >
                {market.animalkind}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: "8",
                  flexWrap: "wrap",
                }}
              >
                {market.title}
              </Text>
            </View>
          </>
        );
      })}
    </ScrollView>
  );
}
