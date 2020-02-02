import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { error, success } from 'components/common';

import AddItem from 'components/AddItem';
import { GET_ITEMS } from 'containers/Board';

const ADD_ITEM = gql`
    mutation AddItem($title: String!, $body: String, $board: ID!) {
        newItem(input: { title: $title, body: $body, board: $board }) {
            _id,
            title,
            body
        }
    }
`;

type addItemProps = {
    board: string;
};

const AddItemContainer = ({ board }: addItemProps) => (
    <Mutation
        mutation={ADD_ITEM}
        update={(cache, { data: { newItem } }) => {
            // @ts-ignore
            const { board: { items } } = cache.readQuery({ query: GET_ITEMS, variables: { board: board } });
            cache.writeQuery({
                query: GET_ITEMS,
                variables: { board: board },
                data: { board: { items: items.concat([newItem]) } },
            });
            success('Item added successfully');
        }}
        onError={apolloError => error(apolloError.message)}
    >
        {addTodo => (
            // @ts-ignore
            <AddItem handleSubmit={fields => {
                addTodo({ variables: { ...fields, board } });
            }} />
        )}
    </Mutation>
);

export default AddItemContainer;
