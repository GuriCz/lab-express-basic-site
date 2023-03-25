const express = require("express");
const app = express();

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("server listening on 3k")
});

app.get("/", (req, res) => res.render(index.html))
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/public/about.html'));
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/public/work.html'));
app.get('/photogallery', (request, response, next) => response.sendFile(__dirname + '/public/pics.html'));