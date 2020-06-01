import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json([{ user: "Nida" }]);
});

app.listen(3333);
