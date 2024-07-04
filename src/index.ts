import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

import { resolvers } from './resolvers'
import { typeDefs } from './schemas'
import { ENV } from './libs'

const plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })]

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, plugins })

startStandaloneServer(server, { listen: { port: ENV.PORT } }).then(({ url }) => console.log(`🚀  Server ready at ${url}`))
