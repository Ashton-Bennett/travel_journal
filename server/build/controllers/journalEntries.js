"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJournal = exports.deleteJournal = exports.addJournal = exports.getJournalById = exports.getJournals = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const database_1 = __importDefault(require("../database/database"));
const queries_1 = require("../database/queries");
const getJournals = (_request, response) => {
    database_1.default
        .query(queries_1.getJournalsQuery)
        .then((data) => {
        response.send(data.rows);
    })
        .catch((err) => {
        console.error("Error executing query", err);
        response.status(500).send("Internal Server Error");
    });
};
exports.getJournals = getJournals;
const getJournalById = (request, response) => {
    const id = request.params.id;
    database_1.default
        .query(queries_1.getJournalByIdQuery, [id])
        .then((data) => {
        if (data.rows.length === 0) {
            // Send a response indicating that the ID does not exist
            response.status(404).json({ error: "ID not found" });
        }
        else {
            // Send the results if the ID exists
            response.status(200).json(data.rows);
        }
    })
        .catch((err) => {
        console.error("Error executing query", err);
        response.status(500).send("Internal Server Error");
    });
};
exports.getJournalById = getJournalById;
const addJournal = (request, response) => {
    const { title, date, imageFolder, content } = request.body;
    database_1.default
        .query(queries_1.addJournalQuery, [title, date, imageFolder, content])
        .then(() => {
        response.status(201).send(`Inserted ${title} into product Database`);
    })
        .catch((err) => {
        console.error("Error executing query", err);
        response.status(500).send("Internal Server Error");
    });
};
exports.addJournal = addJournal;
const deleteJournal = (request, response) => {
    const id = request.params.id;
    database_1.default
        .query(queries_1.getJournalByIdQuery, [id])
        .then((data) => {
        if (data.rows.length === 0) {
            response.status(404).send("Unable to DELETE product: ID not found");
        }
        else {
            database_1.default
                .query(queries_1.deleteJournalQuery, [id])
                .then(() => {
                response.status(200).send("DELETED product");
            })
                .catch((err) => {
                console.error("Error executing delete query", err);
                response.status(500).send("Internal Server Error");
            });
        }
    })
        .catch((err) => {
        console.error("Error executing delete query", err);
        response.status(500).send("Internal Server Error");
    });
};
exports.deleteJournal = deleteJournal;
const updateJournal = (request, response) => {
    const id = request.params.id;
    const { title, date, imageFolder, content } = request.body;
    database_1.default
        .query(queries_1.getJournalByIdQuery, [id])
        .then((data) => {
        if (data.rows.length === 0) {
            response.status(404).send("Unable to update product: ID not found");
        }
        else {
            database_1.default
                .query(queries_1.updateJournalQuery, [title, date, imageFolder, content, id])
                .then(() => {
                response.status(200).send("Product updated successfully");
            })
                .catch((err) => {
                console.error("Error executing update query", err);
                response.status(500).send("Internal Server Error");
            });
        }
    })
        .catch((err) => {
        console.error("Error executing select query", err);
        response.status(500).send("Internal Server Error");
    });
};
exports.updateJournal = updateJournal;
