"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const configs_1 = require("./configs");
const server = new server_1.ApolloServer(configs_1.apolloServerOptions);
(0, standalone_1.startStandaloneServer)(server, configs_1.startStandaloneServerOptions).then(configs_1.startStandaloneServerCallback);
