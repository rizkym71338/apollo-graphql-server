"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.NotFoundError = exports.UnauthenticatedError = void 0;
const graphql_1 = require("graphql");
class UnauthenticatedError extends graphql_1.GraphQLError {
    constructor(message) {
        super(message, { extensions: { code: 'UNAUTHENTICATED', http: { status: 401 } } });
    }
}
exports.UnauthenticatedError = UnauthenticatedError;
class NotFoundError extends graphql_1.GraphQLError {
    constructor(message) {
        super(message, { extensions: { code: 'NOT_FOUND', http: { status: 404 } } });
    }
}
exports.NotFoundError = NotFoundError;
class BadRequestError extends graphql_1.GraphQLError {
    constructor(message) {
        super(message, { extensions: { code: 'BAD_REQUEST', http: { status: 400 } } });
    }
}
exports.BadRequestError = BadRequestError;
