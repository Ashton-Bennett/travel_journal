import app from "./app";
import { Server } from "http";

const PORT = 3000;
const server: Server = app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} link--> http://localhost:${PORT}/`
  );
});

export default server;
