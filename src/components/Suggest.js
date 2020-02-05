import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ProductsContext} from '../contexts/ProductsContextApi';
export default ({navigation}) => {
  const context = useContext(ProductsContext);
  return (
    <FlatList
      data={context.randomBeers}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View>
          <Text style={{fontSize: 20}}>{item.tagline}!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details', {beerId: item.id})}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={{uri: item.image_url}}></Image>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'black',
    width: width,
    height: height * 0.3,
  },
});
