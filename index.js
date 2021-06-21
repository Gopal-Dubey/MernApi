const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const adminRoute = require("./Routes/adminRoutes");
const userRoute = require("./Routes/UserRoutes");
const dotenv = require("dotenv");
const User = require("./Models/usermodel");
const PORT = 2000;

dotenv.config({ path: "./config.env" });
app.use(bodyParser.json());

const DB = process.env.DATABASE;

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use((error, req, res, next) => {
  res.status(error.code);

  res.json({
    message: error.message || "Unknown Error Occured",
    code: error.code,
  });
});

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(2000, () => {
  console.log("listening");
});
