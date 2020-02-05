import React from 'react';
import {ProductsProvider} from '../contexts/ProductsContextApi';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsList from '../components/ProductsList';
import Suggest from '../components/Suggest';

const Tab = createBottomTabNavigator();

export default () => (
  <ProductsProvider>
    <Tab.Navigator>
      <Tab.Screen name="Ürünler" component={ProductsList} />
      <Tab.Screen name="Ürün Önerileri" component={Suggest} />
    </Tab.Navigator>
  </ProductsProvider>
);
