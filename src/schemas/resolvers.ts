import { books, lendings, members } from '../constants'
import { prisma } from '../libs'
import { Book, BookInput, Lending, Member } from './types'

export const resolvers = {
  Query: {
    async books() {
      return await prisma.book.findMany()
    },

    async book(_: unknown, args: { id: string }) {
      return await prisma.book.findUnique({ where: { id: args.id } })
    },

    async members() {
      return await prisma.member.findMany()
    },

    async member(_: unknown, args: { id: string }) {
      return await prisma.member.findUnique({ where: { id: args.id } })
    },

    async lendings() {
      return await prisma.lending.findMany()
    },

    async lending(_: unknown, args: { id: string }) {
      return await prisma.lending.findUnique({ where: { id: args.id } })
    },
  },

  Mutation: {
    async createBook(_: unknown, args: { input: BookInput }) {
      return await prisma.book.create({ data: args.input })
    },

    async updateBook(_: unknown, args: { id: string; input: BookInput }) {
      return await prisma.book.update({ where: { id: args.id }, data: args.input })
    },

    async deleteBook(_: unknown, args: { id: string }) {
      return await prisma.book.delete({ where: { id: args.id } })
    },

    async createMember(_: unknown, args: { input: Member }) {
      return await prisma.member.create({ data: args.input })
    },

    async updateMember(_: unknown, args: { id: string; input: Member }) {
      return await prisma.member.update({ where: { id: args.id }, data: args.input })
    },

    async deleteMember(_: unknown, args: { id: string }) {
      return await prisma.member.delete({ where: { id: args.id } })
    },

    async createLending(_: unknown, args: { input: Lending }) {
      return await prisma.lending.create({ data: args.input })
    },

    async updateLending(_: unknown, args: { id: string; input: Lending }) {
      return await prisma.lending.update({ where: { id: args.id }, data: args.input })
    },

    async deleteLending(_: unknown, args: { id: string }) {
      return await prisma.lending.delete({ where: { id: args.id } })
    },
  },

  Book: {
    async lendings(book: Book) {
      return await prisma.lending.findMany({ where: { bookId: book.id } })
    },
  },

  Member: {
    async lendings(member: Member) {
      return await prisma.lending.findMany({ where: { memberId: member.id } })
    },
  },

  Lending: {
    async book(lending: Lending) {
      return await prisma.book.findUnique({ where: { id: lending.bookId } })
    },

    async member(lending: Lending) {
      return await prisma.member.findUnique({ where: { id: lending.memberId } })
    },
  },
}
