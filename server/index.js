//This imports the Express library, which is a lightweight framework for building web servers and APIs in Node.js.
const express = require('express');

// By default, browsers block cross-origin HTTP requests to protect against malicious activities so we have to use cors

const cors = require('cors');
const app = express();
app.use(cors());

////this is because if you want to send data via POST we have to parse it then only it iwll be possible
app.use(express.json());

app.get('/', (req,res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

