var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}))

app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use(express.static("public"));

// var apiRoutes = require("./routes/apiRoutes");
// apiRoutes(app)

// var htmlRoutes = require("./routes/htmlRoutes");
// htmlRoutes(app)


var routes = require("./controllers/burger_controller.js");

app.use(routes);



app.listen(PORT, function(){
    console.log("app is listening on http://localhost:" + PORT)
});