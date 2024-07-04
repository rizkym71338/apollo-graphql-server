import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

import { resolvers } from './resolvers'
import { typeDefs } from './schemas'
import { ENV } from './libs'

const plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })]

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, plugins })

const context = async ({ req }: any) => ({ token: req.headers.authorization || '' })

const listen = { port: ENV.PORT }

const callback = ({ url }: any) => console.log(`🚀  Server ready at ${url}`)

startStandaloneServer(server, { context, listen }).then(callback)
