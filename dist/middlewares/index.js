"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationMiddleware = authenticationMiddleware;
const libs_1 = require("../libs");
function authenticationMiddleware(token) {
    if (token !== libs_1.ENV.SECRET_TOKEN)
        throw new libs_1.UnauthenticatedError('Unauthenticated');
}
