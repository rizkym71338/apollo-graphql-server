import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
// import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

import { typeDefs, resolvers } from './schema'

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // introspection: true,
    // plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  })
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })
  console.log(`🚀  Server ready at ${url}`)
}

startServer()
