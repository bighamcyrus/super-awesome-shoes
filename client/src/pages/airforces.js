import React from 'react'
import Nav from './Components/navBar/navBar'
import React from 'react'

import Product from '../Components/Product/product'
import { useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
// import { QUERY_CATEGORIES } from '../utils/queries';


const Category = () => {
  const { category } = useParams();
  const { loading, data } = useQuery(QUERY_CATEGORIES, {
    variables: {
      category: category
    }
  });

    if (loading) {
      return <p>loading</p>
    }



  return (
    <div>
      <Nav/>
     
      
    </div>
  )
}

export default Category

