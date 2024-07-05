import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { apolloServerOptions, startStandaloneServerCallback, startStandaloneServerOptions } from './configs'

const server = new ApolloServer(apolloServerOptions)

startStandaloneServer(server, startStandaloneServerOptions).then(startStandaloneServerCallback)
