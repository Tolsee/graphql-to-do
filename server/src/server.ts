import { ApolloServer, gql, ServerInfo } from "apollo-server";

interface Book {
    author: string;
    title: string;
}

const books: Array<Book> = [
    {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
    },
    {
        author: 'Michael Crichton',
        title: 'Jurassic Park',
    },
];

const typeDefs: any = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;

const resolvers = {
    Query: {
        books: () => books,
    },
};

const start = async () => {
    const server = new ApolloServer({typeDefs: typeDefs, resolvers: resolvers});

    await server.listen().then((info: ServerInfo) => {
        // tslint:disable-next-line:no-console
        console.log(`🚀  Server ready at ${info.url}`);
    });
};

export default start;
