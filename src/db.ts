export const books = [
  { id: 'book-1', title: 'The Awakening', author: 'Kate Chopin', category: 'Poetry', total: 10, publishedAt: '2021-01-01' },
  { id: 'book-2', title: 'City of Glass', author: 'Paul Auster', category: 'Poetry', total: 10, publishedAt: '2021-01-01' },
  { id: 'book-3', title: 'The Alchemist', author: 'Paulo Coelho', category: 'Poetry', total: 10, publishedAt: '2021-01-01' },
]

export const members = [
  { id: 'member-1', name: 'Hirusha', email: 'h@h.com', verified: true },
  { id: 'member-2', name: 'Hira', email: 'h@h.com', verified: false },
  { id: 'member-3', name: 'Hira', email: 'h@h.com', verified: true },
]

export const lendings = [
  { id: 'lending-1', bookId: 'book-1', memberId: 'member-1', borrowedAt: '2021-01-01', returnedAt: '2021-01-02' },
  { id: 'lending-2', bookId: 'book-2', memberId: 'member-2', borrowedAt: '2021-01-01', returnedAt: '2021-01-02' },
]
