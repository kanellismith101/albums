import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children}) => {
  const { textStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
    color: '#007aff',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#007aff",
    backgroundColor: "#fff",
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    marginLeft: 5,
    marginRight: 5
    // marginTop: 20,
    //elevation: 3,
    // position: "relative"
  }
};
export default Button;
