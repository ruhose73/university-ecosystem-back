const express = require("express");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 6000;
const router = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

//  http://localhost:6000/ecosystem-mail
app.use("/ecosystem-mail", router);

const start = async() => {
    try {
        app.listen(PORT, () =>
            console.log(`App has been started on port: ${PORT} `)
        );
    } catch (e) {
        console.log("Server error", e.message);
        process.exit(1);
    }
};

start();
