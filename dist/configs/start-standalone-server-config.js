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
exports.startStandaloneServerOptions = void 0;
exports.startStandaloneServerCallback = startStandaloneServerCallback;
const libs_1 = require("../libs");
exports.startStandaloneServerOptions = {
    listen: { port: libs_1.ENV.PORT },
    context(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req }) {
            return { token: req.headers.authorization || '' };
        });
    },
};
function startStandaloneServerCallback({ url }) {
    return console.log(`\x1b[34m🚀  Server ready at ${url} in ${libs_1.ENV.NODE_ENV} mode\x1b[0m`);
}
