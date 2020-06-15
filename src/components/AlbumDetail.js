import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardItem";
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist, image, url } = album;
  const {
    textStyle,
    viewStyle,
    thumnbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumnbnailStyle} />
        </View>
        <View style={viewStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={textStyle}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>BUY NOW</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  textStyle: {
    fontSize: 14
  },
  headerTextStyle: {
    fontSize: 20
  },
  viewStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  thumnbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRigth: 10
  }
};
export default AlbumDetail;
