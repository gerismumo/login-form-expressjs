const express = require('express');
const app = express();

app.use(express.static('front-end'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/front-end/index.html');
});

app.listen(5000, () => {
    console.log("Listening to port 5000");
})