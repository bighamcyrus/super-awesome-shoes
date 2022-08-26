import React, { useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Nav from './Components/navBar/navBar';

import ShoppingCart from './Components/Cart';
import { StoreProvider } from './utils/GlobalState';





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
  console.log ("Store Provider")
  console.log(StoreProvider)
  
  return (
    <StoreProvider value={StoreProvider}>
      <Router>
        <StoreProvider>
          <ShoppingCart />
        </StoreProvider>
      </Router>
    </StoreProvider>
  
     
    
  ) 
}

export default App;
