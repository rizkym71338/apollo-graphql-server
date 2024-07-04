import { readFileSync } from 'fs'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

import { resolvers } from './resolvers'
import { ENV } from './libs'

const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' })

const plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })]

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, plugins })

startStandaloneServer(server, { listen: { port: ENV.PORT } }).then(({ url }) => console.log(`🚀  Server ready at ${url}`))
