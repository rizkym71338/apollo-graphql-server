"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const query_resolver_1 = require("./query-resolver");
const mutation_resolver_1 = require("./mutation-resolver");
const book_resolver_1 = require("./book-resolver");
const member_resolver_1 = require("./member-resolver");
const lending_resolver_1 = require("./lending-resolver");
exports.resolvers = { Query: query_resolver_1.queryResolver, Mutation: mutation_resolver_1.mutationResolver, Book: book_resolver_1.bookResolver, Member: member_resolver_1.memberResolver, Lending: lending_resolver_1.lendingResolver };
