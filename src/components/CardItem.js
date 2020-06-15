import React from "react";
import { Text, View } from "react-native";

const CardItem = props => {
  const { album } = props;
  const { textStyle, containerStyle } = styles;

  return <View style={containerStyle}>{props.children}</View>;
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "white",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  }
};
export default CardItem;
