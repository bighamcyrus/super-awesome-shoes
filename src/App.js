import React from 'react';

import { StoreProvider } from './utils/GlobalState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductList from './Components/ProductList/ProductList'
import ShoppingCart from './Components/Cart';


import Home from './pages/Home';
import Nav from './Components/navBar/navBar'
import Product from './Components/Product/product'




function App() {
  return (
    <Router>
    <div>
      <StoreProvider>
       
      
        <Routes>
          <Route 
            path="/" 
            element={<Home />}  />


   
     

    {/* <ShoppingCart /> */}

   

    
    </Routes>
    
    </StoreProvider>
      </div>
    </Router>
     
  );
}

export default App;

// import Nav from './Components/navBar/navBar';



// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

