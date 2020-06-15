import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { headerText } = props;
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    alignItems: "center",
    height: 60,
    backgroundColor: 'white',
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'
  }
};
export default Header;
