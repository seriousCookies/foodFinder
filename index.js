const server = require("./back-end/src/index.js").app;

port = process.env.PORT;

server.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:3000/graphql`)
);
