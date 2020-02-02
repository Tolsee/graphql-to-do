import React, { useContext, Fragment } from 'react';
import { ApolloProvider } from "react-apollo";

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { ThemeProvider } from "styled-components";
import { GlobalStyle, getCurrentTheme } from 'styledConfig';

import AppLayout from 'components/Layout';
import BoardContainer from 'containers/BoardContainer';

import { AppContext, AppStore } from 'store/App';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/'
});

const client = new ApolloClient({
    cache,
    link
});

function App() {
   const { mode } = useContext(AppContext);

   return (
       <ThemeProvider theme={getCurrentTheme(mode)}>
           <Fragment>
               <GlobalStyle/>
               <ApolloProvider client={client}>
                   <AppLayout>
                       <BoardContainer/>
                   </AppLayout>
               </ApolloProvider>
           </Fragment>
       </ThemeProvider>
   )
}

export default function AppWithTheme() {
    return (
        <AppStore>
            <App />
        </AppStore>
    );
}

