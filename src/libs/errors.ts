import { GraphQLError } from 'graphql'

export class UnauthenticatedError extends GraphQLError {
  constructor(message: string) {
    super(message, { extensions: { code: 'UNAUTHENTICATED', http: { status: 401 } } })
  }
}

export class NotFoundError extends GraphQLError {
  constructor(message: string) {
    super(message, { extensions: { code: 'NOT_FOUND', http: { status: 404 } } })
  }
}

export class BadRequestError extends GraphQLError {
  constructor(message: string) {
    super(message, { extensions: { code: 'BAD_REQUEST', http: { status: 400 } } })
  }
}
