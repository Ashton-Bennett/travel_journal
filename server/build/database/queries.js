"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJournalQuery = exports.deleteJournalQuery = exports.addJournalQuery = exports.getJournalByIdQuery = exports.getJournalsQuery = exports.getUserQuery = void 0;
exports.getUserQuery = 'SELECT * FROM "user" WHERE id = 1';
exports.getJournalsQuery = "SELECT * FROM journal";
exports.getJournalByIdQuery = "SELECT * FROM journal WHERE id = $1";
exports.addJournalQuery = "INSERT INTO journal(title, date, imageFolder, content) VALUES ($1, $2, $3, $4)";
exports.deleteJournalQuery = "DELETE from journal WHERE id = $1";
exports.updateJournalQuery = `UPDATE journal SET title = $1, date = $2, imageFolder = $3, content = $4 WHERE id = $5`;
