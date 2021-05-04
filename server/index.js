const express = require("express");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const bodyParser = require("body-parser");
const morgan = require("morgan");

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();
  const server = require("http").createServer(app);
  const io = require("socket.io")(server);

  app.use(express.json());
  app.use(morgan("dev"));

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  const apiRouter = require("./routes/api");

  // Answer API requests.
  app.use("/api", apiRouter);
  app.io = io;

  server.listen(PORT, function () {
    console.error(
      `Node ${
        isDev ? "dev server" : "cluster worker " + process.pid
      }: listening on port ${PORT}`
    );
  });
  io.on("connection", (socket) => {
    socket.on("hello", (data) => {});

    socket.on("addedData", (data) => {
      socket.broadcast.emit("newData", data);
    });

    socket.on("disconnect", () => {});
  });
}
