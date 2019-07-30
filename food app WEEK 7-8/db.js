"use strict"
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "fast_food"
});

function get_all_inventory () {

    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM inventory", function (err, result) {
            if (err) throw err;
            // console.log("calling inside the function", result);
            resolve(JSON.parse(JSON.stringify(result)));
        })

    });
}
get_all_inventory().then(result => {console.log(result)});



function set_new_item(item_name, item_count){

    con.query("INSERT INTO inventory (item_name, item_count) VALUES ('" +  item_name + "', '" + item_count + "')", function (err, result) {
        if (err) throw err;
        return "your order was recieved"; 
    });
};
    
    set_new_item('fries', 4);
    


    // var express = require('express')
    // var app = express()
    
    // // respond with "hello world" when a GET request is made to the homepage
    // app.get('/', function (req, res) {
    //   res.send('you have accessed the index page')
    // })
    
    
//     module.exports = get_all_inventory, set_new_item {
//     console.log()
// };
    // function get_all_inventory() {
    //     con.query('SELECT * FROM inventory', function (err, result) {
    //         if (err) throw err;
    //         return(result);
    //     }
    //     )
    //     return result;

    // }

    // get_all_inventory();


//     function set_new_item(item_name, item_count) {

// }