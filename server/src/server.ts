import { ApolloServer, gql, ServerInfo } from 'apollo-server';
import { merge } from 'lodash';

/**
 * Resolvers
 */
import board from 'types/board/board.resolver';
import item from 'types/item/item.resolver';
import date from 'utils/dateResolver';

import connectDb from 'utils/db';
import loadTypeSchema from 'utils/loadTypeSchema';

const types: Array<string> = [ 'item', 'board' ];

const rootSchema = gql`
    schema {
        query: Query
        mutation: Mutation
    }
`;

const start = async () => {
    const typeDefs = await Promise.all(types.map( type => loadTypeSchema(type)));
    const server = new ApolloServer({
        typeDefs: [rootSchema, ...(typeDefs.map(typeDef => gql(typeDef)))],
        resolvers: merge({}, date, item, board)
    });

    await connectDb();
    await server.listen().then((info: ServerInfo) => {
        // tslint:disable-next-line:no-console
        console.log(`🚀  Server ready at ${info.url}`);
    });
};

export default start;
