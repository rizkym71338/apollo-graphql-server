import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled'

import { typeDefs, resolvers } from './schema'

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, plugins: [ApolloServerPluginLandingPageDisabled()] })
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })
  console.log(`🚀  Server ready at ${url}`)
}

startServer()
