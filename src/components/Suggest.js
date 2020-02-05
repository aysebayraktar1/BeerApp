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
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details', {beerId: item.id})}>
            <Image style={{flex: 1}} source={{uri: item.image_url}}></Image>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderColor: '#17AA98',
    width: width,
    height: height * 0.25,
  },
});
