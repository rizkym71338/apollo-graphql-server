export const typeDefs = `#graphql
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

  type Mutation {
    createBook(input: BookInput): Book
    updateBook(id: ID, input: BookInput): Book
    deleteBook(id: ID): Book
  }
`
