const express = require("express");
require("dotenv").config();
const sequelize = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const router = require("./routes/mergeRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());

//  http://localhost:5000/ecosystem
app.use("/ecosystem", router);
app.use(errorMiddleware);

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () =>
            console.log(`App has been started on port: ${PORT} `)
        );
    } catch (e) {
        console.log("Server error", e.message);
        process.exit(1);
    }
};
start();
