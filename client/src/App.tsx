import React, { Fragment } from 'react';
import { ApolloProvider } from "react-apollo";

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import GlobalStyle from './GlobalStyle';

import BoardContainer from 'components/board/Container';
import Board from 'containers/Board';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/'
});

const client = new ApolloClient({
    cache,
    link
});

const boards = [
    'todo',
    'progress',
    'complete'
];

const App = () => (
    <Fragment>
        <GlobalStyle />
        <ApolloProvider client={client}>
            <BoardContainer>
                {
                    boards.map(name => (
                        // @ts-ignore
                        <Board key={name} name={name} />
                    ))
                }
            </BoardContainer>
        </ApolloProvider>
    </Fragment>
);

export default App;
