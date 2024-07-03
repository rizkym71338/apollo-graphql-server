import { books, lendings, members } from '../constants'
import { Book, BookInput, Lending, Member } from './types'

export const resolvers = {
  Query: {
    async books() {
      return books
    },

    async book(_: unknown, args: { id: string }) {
      return books.find((book) => book.id === args.id)
    },

    async members() {
      return members
    },

    async member(_: unknown, args: { id: string }) {
      return members.find((member) => member.id === args.id)
    },

    async lendings() {
      return lendings
    },

    async lending(_: unknown, args: { id: string }) {
      return lendings.find((lending) => lending.id === args.id)
    },
  },

  Mutation: {
    async createBook(_: unknown, args: { input: BookInput }) {
      const book = { ...args.input, id: `book-${Math.random()}` }
      books.push(book)
      return book
    },

    async updateBook(_: unknown, args: { id: string; input: BookInput }) {
      const book = books.find((book) => book.id === args.id)

      book!.title = args.input.title
      book!.author = args.input.author
      book!.category = args.input.category
      book!.total = args.input.total
      book!.publishedAt = args.input.publishedAt

      return book
    },

    async deleteBook(_: unknown, args: { id: string }) {
      return books.find((book) => book.id === args.id)
    },
  },

  Book: {
    async lendings(book: Book) {
      return lendings.filter((lending) => lending.bookId === book.id)
    },
  },

  Member: {
    async lendings(member: Member) {
      return lendings.filter((lending) => lending.memberId === member.id)
    },
  },

  Lending: {
    async book(lending: Lending) {
      return books.find((book) => book.id === lending.bookId)
    },

    async member(lending: Lending) {
      return members.find((member) => member.id === lending.memberId)
    },
  },
}
