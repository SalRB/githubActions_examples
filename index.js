const port = 3000;
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Servidor node para actions');
})

app.listen(port, () => {
  console.log(`Servidor node para actions`);
});


