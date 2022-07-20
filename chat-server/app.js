const express = require("express");
require("dotenv").config();
const cors = require("cors");
const sequelize = require("./config/db");
const cookieParser = require("cookie-parser");

const router = require("./routes/routes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const Chat = require("./models/Chat");
const Messages = require("./models/Messages");

const PORT = process.env.PORT || 6500;

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/university-chat", router);

app.use(errorMiddleware);

const server = require('http').Server(app);
const {Server} = require('socket.io');
const io = new Server(server, 
    {cors: {
        origin: '*',
        methods: ["GET", "POST"]
}});

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        const models = {Chat, Messages}
        app.listen(PORT, () =>
            console.log(`App has been started on port: ${PORT} `)
        );
    } catch (e) {
        console.log("Server error", e.message);
        process.exit(1);
    }
};

global.onlineUsers = new Map();
io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
        }
    });
});

start()