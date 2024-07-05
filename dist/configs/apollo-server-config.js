"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apolloServerOptions = void 0;
const default_1 = require("@apollo/server/plugin/landingPage/default");
const resolvers_1 = require("../resolvers");
const schemas_1 = require("../schemas");
const libs_1 = require("../libs");
exports.apolloServerOptions = {
    typeDefs: schemas_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    introspection: true,
    plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true })],
    formatError(error) {
        var _a, _b, _c, _d;
        console.log('\x1b[31m%s\x1b[0m', `☠️   Error : ${error.message} at ${error.path}`);
        if (!libs_1.ENV.IS_PRODUCTION) {
            console.table({ Code: (_a = error.extensions) === null || _a === void 0 ? void 0 : _a.code, Message: error.message, Path: JSON.stringify(error.path), Locations: JSON.stringify(error.locations) });
            const stacktrace = ((_b = error.extensions) === null || _b === void 0 ? void 0 : _b.stacktrace).map((item) => ({ stacktrace: item }));
            console.table(stacktrace);
        }
        return {
            message: error.message,
            locations: libs_1.ENV.IS_PRODUCTION ? undefined : error.locations,
            path: error.path,
            extensions: { code: (_c = error.extensions) === null || _c === void 0 ? void 0 : _c.code, stacktrace: libs_1.ENV.IS_PRODUCTION ? undefined : (_d = error.extensions) === null || _d === void 0 ? void 0 : _d.stacktrace },
        };
    },
};
