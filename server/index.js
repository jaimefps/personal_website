const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('server listening on PORT', PORT));