"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const journalEntries_1 = require("../controllers/journalEntries");
const router = express_1.default.Router();
router.get("/", journalEntries_1.getJournals);
router.get("/:id", journalEntries_1.getJournalById);
router.post("/", journalEntries_1.addJournal);
router.put("/:id", journalEntries_1.updateJournal);
router.delete("/:id", journalEntries_1.deleteJournal);
exports.default = router;
