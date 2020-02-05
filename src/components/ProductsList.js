import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {ProductsContext} from '../contexts/ProductsContextApi';

export default ({navigation}) => {
  const context = useContext(ProductsContext);
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          textAlign: 'center',
          color: 'purple',
        }}>
        BEERS
      </Text>
      <FlatList
        data={context.beers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{marginTop: 15}}>
            <TouchableOpacity
              style={styles.image}
              onPress={() => navigation.navigate('Details', {beerId: item.id})}>
              <Image
                style={{flex: 1, resizeMode: 'contain'}}
                source={{uri: item.image_url}}></Image>
              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 20,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#808080',
    width: width * 0.98,
    height: height * 0.3,
  },
});
