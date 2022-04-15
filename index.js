
const server = require('./api/server')

const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
  console.log(`Port is up and running on port ${PORT}`)
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})