import http from 'http'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { IResolvers } from '@graphql-tools/utils'
import { DocumentNode } from 'graphql'

import { books } from './db'

async function startApolloServer(typeDefs: DocumentNode | string, resolvers: IResolvers) {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  })
  await server.start()
  server.applyMiddleware({ app })
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

const typeDefs = `#graphql
  type Book {
    title: String!
  	author: String!
	}
  type Query {
    books: [Book!]
  }
`

const resolvers = {
  Query: {
    books: () => books,
  },
}

startApolloServer(typeDefs, resolvers)
