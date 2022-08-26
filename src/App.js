import React from 'react';
import Nav from './Components/navBar/navBar'
import Product from './Components/Product/product'
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
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <Product />
        <ProductList />
      </ThemeProvider>
      <ShoppingCart />
    </div>
  );
}

export default App;
