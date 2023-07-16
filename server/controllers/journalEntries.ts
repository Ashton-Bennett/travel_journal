/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import pool from "../database/database";
import { Request, Response } from "express";
import {
  getJournalsQuery,
  getJournalByIdQuery,
  addJournalQuery,
  deleteJournalQuery,
  updateJournalQuery,
} from "../database/queries";
import { Journal } from "../types/types";

export const getJournals = (_request: Request, response: Response) => {
  pool
    .query(getJournalsQuery)
    .then((data) => {
      response.send(data.rows);
    })
    .catch((err) => {
      console.error("Error executing query", err);
      response.status(500).send("Internal Server Error");
    });
};

export const getJournalById = (request: Request, response: Response) => {
  const id = request.params.id;
  pool
    .query(getJournalByIdQuery, [id])
    .then((data) => {
      if (data.rows.length === 0) {
        // Send a response indicating that the ID does not exist
        response.status(404).json({ error: "ID not found" });
      } else {
        // Send the results if the ID exists
        response.status(200).json(data.rows);
      }
    })
    .catch((err) => {
      console.error("Error executing query", err);
      response.status(500).send("Internal Server Error");
    });
};

export const addJournal = (request: Request, response: Response) => {
  const { title, date, imageFolder, content, pictures }: Journal = request.body;

  pool
    .query(addJournalQuery, [title, date, imageFolder, content, pictures])
    .then(() => {
      response.status(201).send(`Inserted ${title} into product Database`);
    })
    .catch((err) => {
      console.error("Error executing query", err);
      response.status(500).send("Internal Server Error");
    });
};

export const deleteJournal = (request: Request, response: Response) => {
  const id = request.params.id;

  pool
    .query(getJournalByIdQuery, [id])
    .then((data) => {
      if (data.rows.length === 0) {
        response.status(404).send("Unable to DELETE product: ID not found");
      } else {
        pool
          .query(deleteJournalQuery, [id])
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

export const updateJournal = (request: Request, response: Response) => {
  const id = request.params.id;
  const { title, date, imageFolder, content }: Journal = request.body;

  pool
    .query(getJournalByIdQuery, [id])
    .then((data) => {
      if (data.rows.length === 0) {
        response.status(404).send("Unable to update product: ID not found");
      } else {
        pool
          .query(updateJournalQuery, [title, date, imageFolder, content, id])
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
