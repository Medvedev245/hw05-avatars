import mongoose from "mongoose";

// import gravatar from "gravatar";

import app from "./app.js";

import { DB_HOST } from "./config.js";

// const {DB_HOST, PORT = 3000} = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful :)");
      // const email = "beer@gmail.com";
      // const avatarUrl = gravatar.url(email);
      // console.log(avatarUrl);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
