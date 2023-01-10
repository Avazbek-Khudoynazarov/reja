const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Avazbek:0fmOmISx8zsyoDuw@cluster0.x88fytm.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewURLParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection mongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `server is succesfully running: ${PORT},http://localhost:${PORT}`
        );
      });
    }
  }
);
