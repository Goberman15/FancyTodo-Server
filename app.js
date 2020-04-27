const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routers');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`ToDo app start at PORT: ${PORT}`));
