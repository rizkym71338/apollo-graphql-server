import { prisma } from '../libs'
import { BookInput } from '../types'

export const bookService = {
  async getAllBook() {
    return await prisma.book.findMany({ orderBy: { id: 'desc' } })
  },

  async getBook(id: string) {
    return await prisma.book.findUnique({ where: { id } })
  },

  async createBook(data: BookInput) {
    return await prisma.book.create({ data })
  },

  async updateBook(id: string, data: BookInput) {
    return await prisma.book.update({ where: { id }, data })
  },

  async deleteBook(id: string) {
    return await prisma.book.delete({ where: { id } })
  },
}
