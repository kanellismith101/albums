import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album}/>
    );
  }
  render() {
      console.log(this.state)
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  };
}

// const styles = {
//   textStyle: {
//     fontSize: 20
//   },
//   viewStyle: {
//     alignItems: "center",
//     height: 60,
//     backgroundColor: "white",
//     justifyContent: "center",
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     elevation: 5,
//     position: "relative"
//   }
// };
export default AlbumList;
