import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { typeDefs, resolvers } from './schema'

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, csrfPrevention: true, introspection: true, cache: 'bounded' })
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })
  console.log(`🚀  Server ready at ${url}`)
}

startServer()
