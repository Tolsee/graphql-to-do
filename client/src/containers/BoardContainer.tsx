import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Board from 'containers/Board';
import Container from 'components/Board/Container';

export const GET_BOARDS = gql`
    query boardList {
        boards {
            _id,
            name
        }
    }
`;

export default () => (
    <Container>
        <Query query={GET_BOARDS}>
            {({data, loading, error }) => (
                <>
                    {
                        !loading &&
                        !error &&
                        data.boards.map((boardData: any) =>
                            <Board key={boardData._id} boards={data.boards} {...boardData}/>
                        )
                    }
                </>
            )}
        </Query>
    </Container>
)
