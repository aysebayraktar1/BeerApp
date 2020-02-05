import React from 'react';
import {ProductsProvider} from '../contexts/ProductsContextApi';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsList from '../components/ProductsList';
import Suggest from '../components/Suggest';

const Tab = createBottomTabNavigator();

export default () => (
  <ProductsProvider>
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductsList} />
      <Tab.Screen name="Best" component={Suggest} />
    </Tab.Navigator>
  </ProductsProvider>
);
