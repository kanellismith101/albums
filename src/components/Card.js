import React from "react";
import { Text, View } from "react-native";

const Card = (props) => {
  const { album } = props;
  const { textStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    borderBottomWidth: 0,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    elevation: 3,
    position: "relative"
  }
};
export default Card;
