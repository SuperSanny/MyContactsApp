const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
connectDb();

const port = process.env.PORT1 || 3000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRouters"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
