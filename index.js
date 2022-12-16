let port = 3000;
let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('Servidor node para actions.');
})

app.listen(port, () => {
  console.log(`Servidor node para actions`);
});


