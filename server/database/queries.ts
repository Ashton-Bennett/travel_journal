export const getUserQuery = 'SELECT * FROM "user" WHERE id = 1';
export const getJournalsQuery = "SELECT * FROM journal";
export const getJournalByIdQuery = "SELECT * FROM journal WHERE id = $1";
export const addJournalQuery =
  "INSERT INTO journal(title, date, imageFolder, content, pictures) VALUES ($1, $2, $3, $4, $5)";
export const deleteJournalQuery = "DELETE from journal WHERE id = $1";
export const updateJournalQuery = `UPDATE journal SET title = $1, date = $2, imageFolder = $3, content = $4 WHERE id = $5`;
