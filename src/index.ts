import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

import { resolvers } from './resolvers'
import { typeDefs } from './schemas'
import { ENV } from './libs'

async function startServer() {
  const plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })]
  const server = new ApolloServer({ typeDefs, resolvers, introspection: true, plugins })
  const { url } = await startStandaloneServer(server, { listen: { port: ENV.PORT } })
  console.log(`🚀  Server ready at ${url}`)
}

startServer()
