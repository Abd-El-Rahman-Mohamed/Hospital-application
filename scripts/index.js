const express = require('express');
const cors = require('cors');
const dataRouter = require('./methods');


const PORT = 3201;
const app = express();

app.use(cors());
app.use('/', dataRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server is up and running on port ${PORT} 🚀`);
}); 
