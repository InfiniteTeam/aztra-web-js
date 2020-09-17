require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const authRoute = require('./routes/auth');

app.use('/login', authRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});