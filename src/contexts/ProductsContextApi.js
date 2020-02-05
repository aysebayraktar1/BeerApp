import React, {useState, useEffect} from 'react';
import axios from 'axios';
const ProductsContext = React.createContext();

const ProductsProvider = props => {
  const [beers, setBeers] = useState();
  const [randomBeers, setRandomBeers] = useState();

  fetchBeers = async () => {
    const res = await axios.get('https://api.punkapi.com/v2/beers');
    if (res && res.data) {
      setBeers(res.data);
    }
  };

  fetchRandomBeers = async () => {
    const res = await axios.get('https://api.punkapi.com/v2/beers/random');
    if (res && res.data) {
      setRandomBeers(res.data);
    }
  };

  useEffect(() => {
    fetchBeers();
    fetchRandomBeers();
  }, []);

  return (
    <ProductsContext.Provider value={{beers, randomBeers}}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export {ProductsProvider, ProductsContext};
