import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { error, success } from 'components/common';

import AddItem from 'components/addItem';
import { GET_ITEMS } from 'containers/Board';

const ADD_ITEM = gql`
    mutation AddItem($title: String!, $body: String) {
        newItem(input: { title: $title, body: $body }) {
            _id,
            title,
            body
        }
    }
`;

const AddItemContainer = () => (
    <Mutation
        mutation={ADD_ITEM}
        update={(cache, { data: { newItem } }) => {
            // @ts-ignore
            const { items } = cache.readQuery({ query: GET_ITEMS, variables: { state: 'todo' } });
            cache.writeQuery({
                query: GET_ITEMS,
                variables: { state: 'todo' },
                data: { items: items.concat([newItem]) },
            });
            success('Item added successfully');
        }}
        onError={apolloError => error(apolloError.message)}
    >
        {addTodo => (
            // @ts-ignore
            <AddItem handleSubmit={fields => {
                addTodo({ variables: fields });
            }} />
        )}
    </Mutation>
);

export default AddItemContainer;
