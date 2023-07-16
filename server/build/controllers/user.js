"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const database_1 = __importDefault(require("../database/database"));
const queries_1 = require("../database/queries");
const getUser = (_request, response) => {
    database_1.default
        .query(queries_1.getUserQuery)
        .then((data) => {
        response.send(data.rows);
    })
        .catch((err) => {
        console.error("Error executing query", err);
        response.status(500).send("Internal Server Error");
    });
};
exports.getUser = getUser;
