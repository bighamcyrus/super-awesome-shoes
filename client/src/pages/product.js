import React from 'react'

import Product from '../Components/Product/product'
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { ONE_PRODUCT } from '../utils/queries';


const ProductPage = () => {
  const { productId } = useParams();
  const { loading, data } = useQuery(ONE_PRODUCT, {
    variables: {
      _id: productId
    }
  });

    if (loading) {
      return <p>loading</p>
    }



  return (
    <div>
      <Product {...data?.product}/>
      
    </div>
  )
}

export default ProductPage
