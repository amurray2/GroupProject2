let express = require("express");
let app = new express();  
app.set("view engine", "ejs");                                                                   

// set up database connection
const knex = require("knex")({
    client: "mysql",
    connection: {
        host:"paradisedonutdb.cluster-c3y7rn9tldra.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "password",
        database:"donut",
        port: 3306,
    },
});

app.get("/", (req,res) => {
    res.send("This is your timecard page <br/><a href='/donuts'>See Donuts</a>");
});

app.get("/donuts", (req,res) => {
    knex
    .select()
    .from("donuts")
    .then((result) => {
        console.log(result);
        res.render("index", {result: result, page: 'All'});
    })
    .catch(dberror => {
        res.send("Database Connection Error");
    });
});

app.get("/glazed", (req,res) => {
    knex
    .select()
    .from("donuts")
    .where('donut_description', 'like', '%Glazed%')
    .then((result) => {
        console.log(result);
        res.render("index", {result: result, page: 'Glazed'});
    })
    .catch(dberror => {
        res.send("Database Connection Error");
    });
});

app.get("/iced", (req,res) => {
    knex
    .select()
    .from("donuts")
    .where('donut_description', 'like', '%Iced%')
    .then((result) => {
        console.log(result);
        res.render("index", {result: result, page: 'Iced'});
    })
    .catch(dberror => {
        res.send("Database Connection Error");
    });
});

app.get("/filled", (req,res) => {
    knex
    .select()
    .from("donuts")
    .where('donut_description', 'like', '%Filled%')
    .then((result) => {
        console.log(result);
        res.render("index", {result: result, page: 'Filled'});
    })
    .catch(dberror => {
        res.send("Database Connection Error");
    });
});

app.get("/cake", (req,res) => {
    knex
    .select()
    .from("donuts")
    .where('donut_description', 'like', '%Cake%')
    .then((result) => {
        console.log(result);
        res.render("index", {result: result, page: 'Cake'});
    })
    .catch(dberror => {
        res.send("Database Connection Error");
    });
});
app.listen(3000)