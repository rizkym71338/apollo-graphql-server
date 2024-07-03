import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { typeDefs, resolvers } from './schema'

interface MyContext {
  token?: string
}

const startServer = async () => {
  const server = new ApolloServer<MyContext>({ typeDefs, resolvers })
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })
  console.log(`🚀  Server ready at ${url}`)
}

startServer()
