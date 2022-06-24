const http = require("http");
const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./db/config");


const server = http.createServer(app);
dotenv.config();

connectDB();


const port = process.env.PORT || 3000;

server.listen(port, () =>{
    console.log(`server is running on ${port}`)
});