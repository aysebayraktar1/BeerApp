import React from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
export default class SpeakerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
      loading: false,
    };
  }
  componentDidMount() {
    const {
      route: {params},
    } = this.props;
    axios.get(`https://api.punkapi.com/v2/beers/${params.beerId}`).then(res => {
      const beer = res.data[0];
      this.setState({beer, loading: false});
    });
  }

  render() {
    const {beer} = this.state;
    if (!beer) return null;
    return (
      <View>
        <Text>{beer.name}</Text>
      </View>
    );
  }
}
