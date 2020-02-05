import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ProductsContext} from '../contexts/ProductsContextApi';

export default ({navigation}) => {
  const context = useContext(ProductsContext);
  return (
    <FlatList
      data={context.beers}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details', {beerId: item.id})}>
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
    width: width * 0.8,
    height: height * 0.07,
  },
});
