import { BaseContext } from '@apollo/server'
import { StartStandaloneServerOptions } from '@apollo/server/standalone'

import { ENV } from '../libs'

interface ListenOptions {
  port: number
}

export const startStandaloneServerOptions: StartStandaloneServerOptions<BaseContext> & { listen?: ListenOptions } = {
  listen: { port: ENV.PORT },
  async context({ req }) {
    return { token: req.headers.authorization || '' }
  },
}

export function startStandaloneServerCallback({ url }: { url: string }) {
  return console.log(`\x1b[34m🚀  Server ready at ${url} in ${ENV.NODE_ENV} mode\x1b[0m`)
}
