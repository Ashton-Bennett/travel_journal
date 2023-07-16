import pool from "../database/database";
import { Request, Response } from "express";
import { getUserQuery } from "../database/queries";
export const getUser = (_request: Request, response: Response) => {
  pool
    .query(getUserQuery)
    .then((data) => {
      response.send(data.rows);
    })
    .catch((err) => {
      console.error("Error executing query", err);
      response.status(500).send("Internal Server Error");
    });
};
