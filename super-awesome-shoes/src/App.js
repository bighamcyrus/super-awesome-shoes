import React from 'react';


import Nav from './Components/navBar/navBar'
import Product from './Components/ProductItem/product'
// import Nav from './Components/navBar/navBar';

// import ShoppingCart from './Components/Cart';


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

function App() {
  return (

<>
    <Nav />
    <Product image={""} seller={""} name={"Jordans"} description={""} _id={""} price={4} quantity={4} />
    {/* // <ShoppingCart /> */}
</>
    



  );
}

export default App;
