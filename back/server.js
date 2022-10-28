const express = require("express");
const app = express();
const routes = require("./routes/Routes");
const connectDB = require("./db/connect");
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors=require("cors")
app.use(express.json());

app.use(cors());
app.use("/api/v1", routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
