import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
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
        update={(cache, { updateItem }) => {
            // @ts-ignore
            const { items } = cache.readQuery({ query: GET_ITEMS, variables: { state: name } });
            // @ts-ignore
            const newItems = items.filter(({ _id }) => _id === updateItem._id).push(updateItem);

            cache.writeQuery({
                query: GET_ITEMS,
                variables: { state: name },
                data: { items: newItems },
            });
        }}
    >
        { updateItem => (
            <Query query={GET_ITEMS} variables={{state: name}}>
                {({data, loading, error}) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return <p>ERROR</p>;
                    return (
                        <Board name={name} items={data.items} updateItem={updateItem}/>
                    )
                }}
            </Query>
        )}
    </Mutation>
)
