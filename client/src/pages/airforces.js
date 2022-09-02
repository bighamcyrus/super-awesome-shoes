import React from 'react'


import Airforces from '../Components/ProductList/AirforceList'
import Product from '../Components/Product/product'
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { QUERY_PRODUCTS } from '../utils/queries'
// import { QUERY_CATEGORIES } from '../utils/queries';


const Category = () => {
  const { category } = useParams();
  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: {
      category: {category}
    }
  });

    if (loading) {
      return <p>loading</p>
    }



  return (
    <div>
      
      <Airforces {...data?.product} />
     
      
    </div>
  )
}

export default Category

