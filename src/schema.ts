import { books, lendings, members } from './db'

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
`

export const resolvers = {
  Query: {
    async books() {
      return books
    },

    async book(_: any, args: { id: string }) {
      return books.find((book) => book.id === args.id)
    },

    async members() {
      return members
    },

    async member(_: any, args: { id: string }) {
      return members.find((member) => member.id === args.id)
    },

    async lendings() {
      return lendings
    },

    async lending(_: any, args: { id: string }) {
      return lendings.find((lending) => lending.id === args.id)
    },
  },

  Book: {
    async lendings(book: any) {
      return lendings.filter((lending) => lending.bookId === book.id)
    },
  },

  Member: {
    async lendings(member: any) {
      return lendings.filter((lending) => lending.memberId === member.id)
    },
  },

  Lending: {
    async book(lending: any) {
      return books.find((book) => book.id === lending.bookId)
    },

    async member(lending: any) {
      return members.find((member) => member.id === lending.memberId)
    },
  },
}
