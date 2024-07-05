import { ENV, UnauthenticatedError } from '../libs'

export function authenticationMiddleware(token: string) {
  if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
}
