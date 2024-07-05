"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
require("dotenv/config");
exports.ENV = {
    NODE_ENV: process.env.NODE_ENV,
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    PORT: Number(process.env.PORT) || 4000,
    DATABASE_URL: process.env.DATABASE_URL,
    SECRET_TOKEN: process.env.SECRET_TOKEN,
};
