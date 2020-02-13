import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
export default class Details extends React.Component {
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
      <SafeAreaView>
        <ScrollView>
          <View style={{backgroundColor: '#808080'}}>
            <View style={{width: width, height: height * 0.4}}>
              <Text style={styles.text2}>{beer.name}</Text>
              <Text style={styles.text2}>{beer.tagline}</Text>

              <Image
                style={{flex: 1, resizeMode: 'contain'}}
                source={{uri: beer.image_url}}></Image>
            </View>
            <View style={{margin: 10}}>
              <Text style={styles.text}>
                First Fermentation Date : {beer.first_brewed}
              </Text>
              <Text style={styles.text1}>Description: {beer.description}</Text>
              <Text style={styles.text}>Brewers Tips: {beer.brewers_tips}</Text>
              <Text style={styles.text1}>
                Contributed By: {beer.contributed_by}
              </Text>
              <Text style={styles.text}>Food Pairing :</Text>
              <Text style={styles.text}>1.{beer.food_pairing[0]}</Text>
              <Text style={styles.text}> 2.{beer.food_pairing[1]}</Text>
              <Text style={styles.text}>3.{beer.food_pairing[2]}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#696969',
  },
  text2: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    color: 'purple',
  },
});
