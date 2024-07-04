"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
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

  input BookInput {
    title: String
    author: String
    category: String
    total: Int
    publishedAt: String
  }

  type Member {
    id: ID
    name: String
    email: String
    verified: Boolean
    lendings: [Lending]
  }

  input MemberInput {
    name: String
    email: String
    verified: Boolean
  }

  type Lending {
    id: ID
    book: Book
    member: Member
    borrowedAt: String
    returnedAt: String
  }

  input LendingInput {
    bookId: ID
    memberId: ID
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

  type Mutation {
    createBook(input: BookInput): Book
    updateBook(id: ID, input: BookInput): Book
    deleteBook(id: ID): Book

    createMember(input: MemberInput): Member
    updateMember(id: ID, input: MemberInput): Member
    deleteMember(id: ID): Member

    createLending(input: LendingInput): Lending
    updateLending(id: ID, input: LendingInput): Lending
    deleteLending(id: ID): Lending
  }
`;
