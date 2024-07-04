"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthenticatedError = void 0;
const graphql_1 = require("graphql");
class UnauthenticatedError extends graphql_1.GraphQLError {
    constructor(message) {
        super(message, { extensions: { code: 'UNAUTHENTICATED', http: { status: 401 } } });
    }
}
exports.UnauthenticatedError = UnauthenticatedError;
