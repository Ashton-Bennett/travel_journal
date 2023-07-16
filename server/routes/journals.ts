import express, { Router } from "express";

import {
  updateJournal,
  getJournals,
  getJournalById,
  deleteJournal,
  addJournal,
} from "../controllers/journalEntries";

const router: Router = express.Router();

router.get("/", getJournals);
router.get("/:id", getJournalById);
router.post("/", addJournal);
router.put("/:id", updateJournal);
router.delete("/:id", deleteJournal);

export default router;
