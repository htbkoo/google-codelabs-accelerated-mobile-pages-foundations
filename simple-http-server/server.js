const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('accelerated-mobile-pages-foundations'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));