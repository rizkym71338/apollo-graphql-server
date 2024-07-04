"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = exports.env = void 0;
const env = (key) => process.env[key] || '';
exports.env = env;
exports.ENV = {
    PORT: Number((0, exports.env)('PORT')) || 4000,
    DATABASE_URL: (0, exports.env)('DATABASE_URL'),
    SECRET_TOKEN: (0, exports.env)('SECRET_TOKEN'),
};
