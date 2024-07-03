export interface Book {
  id: string
  title: string
  author: string
  category: string
  total: number
  publishedAt: string
}

export interface Member {
  id: string
  name: string
  email: string
  verified: boolean
}

export interface Lending {
  id: string
  bookId: string
  memberId: string
  borrowedAt: string
  returnedAt: string
}

export interface BookInput {
  title: string
  author: string
  category: string
  total: number
  publishedAt: string
}
