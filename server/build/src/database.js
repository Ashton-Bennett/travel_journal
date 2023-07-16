"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const pg_1 = require("pg");
const poolConfig = {
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Gibson00",
    port: 3005,
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const pool = new pg_1.Pool(poolConfig);
exports.default = pool;
