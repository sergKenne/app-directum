import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList'
import fetchProducts from '../redux/product/action';

const Home = () => {
  const { loading, error, products: cards } = useSelector((state) => state.products);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
      <div>
          <CardList loading={loading} error={error} cards={cards} />
      </div>
  );
}

export default Home