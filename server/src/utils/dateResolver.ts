import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue: function(value) {
            return new Date(value); // value from the client
        },
        serialize: function(value) {
            return value.getTime(); // value sent to the client
        },
        parseLiteral: function(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(ast.value); // ast value is always in string format
            }
            return null;
        },
    }),
};
