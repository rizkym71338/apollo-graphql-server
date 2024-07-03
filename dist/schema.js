"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const db_1 = require("./db");
exports.typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
    category: String
    total: Int
    publishedAt: String
    lendings: [Lending]
  }

  type Member {
    id: ID
    name: String
    email: String
    verified: Boolean
    lendings: [Lending]
  }

  type Lending {
    id: ID
    book: Book
    member: Member
    borrowedAt: String
    returnedAt: String
  }

  type Query {
    books: [Book]
    book(id: ID): Book

    members: [Member]
    member(id: ID): Member

    lendings: [Lending]
    lending(id: ID): Lending
  }
`;
exports.resolvers = {
    Query: {
        books() {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.books;
            });
        },
        book(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.books.find((book) => book.id === args.id);
            });
        },
        members() {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.members;
            });
        },
        member(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.members.find((member) => member.id === args.id);
            });
        },
        lendings() {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.lendings;
            });
        },
        lending(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.lendings.find((lending) => lending.id === args.id);
            });
        },
    },
    Book: {
        lendings(book) {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.lendings.filter((lending) => lending.bookId === book.id);
            });
        },
    },
    Member: {
        lendings(member) {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.lendings.filter((lending) => lending.memberId === member.id);
            });
        },
    },
    Lending: {
        book(lending) {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.books.find((book) => book.id === lending.bookId);
            });
        },
        member(lending) {
            return __awaiter(this, void 0, void 0, function* () {
                return db_1.members.find((member) => member.id === lending.memberId);
            });
        },
    },
};
