import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function MarketScreen() {
  const data = require("../marketdata.json");

  return (
    <ScrollView>
      {data.map((market) => {
        return (
          <>
            <SliderBox images={market.img1} autoplay={true} />

            <Text style={{ fontSize: 24, textAlign: "center", marginTop: 8 }}>
              {market.title}
            </Text>
            <Text
              style={{ color: "gray", textAlign: "center", marginBottom: 16 }}
            >
              상품명: {market.goods_name}
            </Text>
            <Text
              style={{ color: "gray", textAlign: "center", marginBottom: 16 }}
            >
              품목: {market.category}
            </Text>
            <Text
              style={{ color: "gray", textAlign: "center", marginBottom: 16 }}
            >
              가격: {market.price}
            </Text>
            <Text
              style={{ color: "gray", textAlign: "center", marginBottom: 16 }}
            >
              판매자의 한마디: {market.details}
            </Text>
          </>
        );
      })}
    </ScrollView>
  );
}
