const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const path = require('path');

app.get('/', (req,res) => res.sendFile(path.join(__dirname, './client/public/index.html')));

app.listen(PORT, err =>{
    if(err) throw err;
    console.log(`Server started on port ${PORT}`);
})