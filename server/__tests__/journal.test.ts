import pool from "../database/database";
import { Journal } from "../types/types";
import { addJournal, getJournals } from "../controllers/journalEntries";
import { response } from "express";
import { Request, Response } from "express";
describe("Journal service", () => {
  beforeAll(async () => {
    // Set up any necessary database initialization before running the tests
    await pool.query(
      "CREATE TABLE journalTest (title VARCHAR(200),date  VARCHAR(100),imageFolder VARCHAR(50),content TEXT[],	id SERIAL PRIMARY KEY);"
    );
  });

  afterAll(async () => {
    // Clean up any resources (e.g., database tables) after running the tests
    await pool.query("DROP TABLE journalTest");
    await pool.end();
  });

  it("should create a journal entry", async () => {
    const journal: Journal = {
      title: "Testing my backend",
      date: "08/18/2023",
      imageFolder: "NodeImages",
      content: ["Built a CRUD backend", "Used node, express, and postgres"],
    };

    const request = {
      body: journal,
    };

    //  addJournal(request, response);
    //  getJournals

    //   expect(createdJournal.id).toBeDefined();
    //   expect(createdUser.name).toBe(user.name);
  });

  // it('should get a user by id', async () => {
  //   const user: User = {
  //     name: 'John Doe',
  //   };

  //   const createdUser = await createUser(user, pool);
  //   const fetchedUser = await getUserById(createdUser.id, pool);

  //   expect(fetchedUser).toEqual(createdUser);
  // });
});
