import { ApolloServerOptions, BaseContext } from '@apollo/server'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

import { resolvers } from '../resolvers'
import { typeDefs } from '../schemas'
import { ENV } from '../libs'

export const apolloServerOptions: ApolloServerOptions<BaseContext> = {
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],

  formatError(error) {
    console.log('\x1b[31m%s\x1b[0m', `☠️   Error : ${error.message} at ${error.path}`)

    if (!ENV.IS_PRODUCTION) {
      console.table({ Code: error.extensions?.code, Message: error.message, Path: JSON.stringify(error.path), Locations: JSON.stringify(error.locations) })
      const stacktrace = (error.extensions?.stacktrace as string[]).map((item) => ({ stacktrace: item }))
      console.table(stacktrace)
    }

    return {
      message: error.message,
      locations: ENV.IS_PRODUCTION ? undefined : error.locations,
      path: error.path,
      extensions: { code: error.extensions?.code, stacktrace: ENV.IS_PRODUCTION ? undefined : error.extensions?.stacktrace },
    }
  },
}
