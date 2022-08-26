import React from 'react';
import { StoreProvider } from './utils/GlobalState'
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/navBar/navBar'
import Product from './Components/ProductItem/product'
// import ShoppingCart from './Components/Cart';



function App() {
  return (
<Router>


<StoreProvider>
    <Nav />
    <Product image={""} seller={""} name={"Jordans"} description={""} _id={""} price={4} quantity={4} />
    {/* <ShoppingCart /> */}
</StoreProvider>
    

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


