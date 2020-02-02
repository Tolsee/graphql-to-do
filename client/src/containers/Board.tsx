import React from 'react';
import {Query, Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Board from 'components/Board';

export const GET_ITEMS = gql`
    query boardItems($board: ID!) {
        board(id: $board) {
            items {
                _id,
                title,
                body
            }
        }
    }
`;

const UPDATE_ITEM = gql`
    mutation updateItem($id: ID!, $input: UpdateItemInput) {
        updateItem(id: $id, input: $input) {
            _id,
            title,
            body
        }
    }
`;

type BoardProps = {
    _id: string;
    name: string;
    boards: Array<{ _id: string }>
};

export default ({ _id: board, name, boards }: BoardProps) => (
    <Mutation
        mutation={UPDATE_ITEM}
        // @ts-ignore
        update={(cache, { data: { updateItem }}) => {

            /**
             * Update currently updated board
             */
                // @ts-ignore
            const { board: currentBoard } = cache.readQuery({ query: GET_ITEMS, variables: { board } });
            // @ts-ignore
            const newItems = [...currentBoard.items.filter(({ _id }) => _id !== updateItem._id), updateItem];

            cache.writeQuery({
                query: GET_ITEMS,
                variables: { board },
                data: { board: { ...currentBoard, items: newItems } },
            });

            /**
             * Update other boards
             */
                // @ts-ignore
            const remainingBoards = boards.filter(({ _id }) => _id !== board);
            remainingBoards.forEach(({ _id: currentBoardId }) => {
                // @ts-ignore
                const { board: currentBoardData } = cache.readQuery({ query: GET_ITEMS, variables: { board: currentBoardId } });
                cache.writeQuery({
                    query: GET_ITEMS,
                    variables: {board: currentBoardId},
                    data: {
                        board: {
                            ...currentBoardData,
                            // @ts-ignore
                            items: (currentBoardData && currentBoardData.items) ? currentBoardData.items.filter(({_id}) => _id !== updateItem._id) : []
                        }
                    }
                });
            });
        }}>
        { updateItem => (
            <Query query={GET_ITEMS} variables={{board}}>
                {({data, loading, error }) => (
                    <Board
                        _id={board}
                        loading={loading}
                        error={error}
                        name={name}
                        items={data && data.board && data.board.items}
                        updateItem={updateItem}
                    />
                )}
            </Query>
        )}
    </Mutation>
)
