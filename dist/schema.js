"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const db_1 = require("./db");
exports.typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
exports.resolvers = {
    Query: {
        books: () => db_1.books,
    },
};
