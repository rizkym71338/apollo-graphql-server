"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const resolvers_1 = require("./resolvers");
const schemas_1 = require("./schemas");
const libs_1 = require("./libs");
const plugins = [(0, default_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true })];
const server = new server_1.ApolloServer({ typeDefs: schemas_1.typeDefs, resolvers: resolvers_1.resolvers, introspection: true, plugins });
const context = (_a) => __awaiter(void 0, [_a], void 0, function* ({ req }) { return ({ token: req.headers.authorization || '' }); });
const listen = { port: libs_1.ENV.PORT };
const callback = ({ url }) => console.log(`🚀  Server ready at ${url}`);
(0, standalone_1.startStandaloneServer)(server, { context, listen }).then(callback);
