const server = require("./api/server.js");

const port = 8000;

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
