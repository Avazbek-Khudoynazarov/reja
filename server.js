const express = require("express");
const app = express();
const http = require("http");


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view","view");
app.set("view engine", "ejs");

app.get("/", function( req, res) {
    res.end(`<h1>HELLO WORLD</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`server is succesfully running: ${PORT}`);
})