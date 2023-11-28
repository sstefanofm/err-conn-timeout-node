const app = require('express')()

app.get('/', (req, res) => {
  // ERR_CONNECTION_TIMEOUT
})

app.listen(3000, () => {
  console.log('Api is listening on port 3000')
})
