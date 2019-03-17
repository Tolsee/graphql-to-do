import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { boards } from 'App';
import Board from 'components/board';

export const GET_ITEMS = gql`
    query itemList($state: String) {
        items(state: $state) {
            _id,
            title,
            body
        }
    }
`;

const UPDATE_ITEM = gql`
    mutation updateList($id: ID!, $input: UpdateItemInput) {
        updateItem(id: $id, input: $input) {
            _id,
            title,
            body
        }
    }
`;

type BoardProps = {
    name: string;
};

export default ({ name }: BoardProps) => (
    <Mutation
        mutation={UPDATE_ITEM}
        // @ts-ignore
        update={(cache, { data: { updateItem }}) => {

            /**
             * Update currently updated board
             */
            // @ts-ignore
            const { items } = cache.readQuery({ query: GET_ITEMS, variables: { state: name } });
            // @ts-ignore
            const newItems = [...items.filter(({ _id }) => _id !== updateItem._id), updateItem];

            cache.writeQuery({
                query: GET_ITEMS,
                variables: { state: name },
                data: { items: newItems },
            });

            /**
             * Update other boards
             */
            // @ts-ignore
            const remainingBoards = boards.filter(board => board !== name);
            remainingBoards.forEach(board => {
                const data = cache.readQuery({ query: GET_ITEMS, variables: { state: board } });
                cache.writeQuery({
                    query: GET_ITEMS,
                    variables: { state: board },
                    // @ts-ignore
                    data: { items: data && data.items.filter(({ _id }) => _id !== updateItem._id)},
                });
            });

        }}
    >
        { updateItem => (
            <Query query={GET_ITEMS} variables={{state: name}}>
                {({data, loading, error }) => (
                    <Board
                        loading={loading}
                        error={error}
                        name={name}
                        items={data && data.items}
                        updateItem={updateItem}
                    />
                )}
            </Query>
        )}
    </Mutation>
)
