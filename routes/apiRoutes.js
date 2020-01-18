var mysql = require("mysql");

var connection = mysql.createConnection({
    host : "localhost",
    PORT : 3306,
    user : "root",
    password: "Adiam5312.",
    database: "burgers_db"
})
connection.connect(function(err){
    if (err){
        console.log(err);
    }
    console.log("connection id:", connection.threadId)
})



function apiRoutes(app){
    app.get("/", function(req, res){
        connection.query("Select * From burgers", function(err, results){
            res.render("index", {burger: results})
        })
    })

app.post("/api/burger", function(req, res){
    connection.query("Insert into burgers(burger_name, devoured) Values(?, false)", req.body.burger_name, function(err, results){
        res.json(results);
    })
})

app.put("/")

}
module.exports = apiRoutes;