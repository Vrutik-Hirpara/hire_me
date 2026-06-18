require("dotenv").config();

const express = require("express");


const app = express();

app.use(express.json());

const jobCategoryRoutes = require("./src/routes/jobCategory/jobCategoryRoutes");

app.use("/api/job-categories", jobCategoryRoutes);


const sequelize = require("./src/config/db");

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected");


    await sequelize.sync();
    console.log("Tables Synced");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();