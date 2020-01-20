


// Testing out functionality because controller was not working/code no longer needed.
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