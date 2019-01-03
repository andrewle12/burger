//import the orm file
var orm = require("../config/orm.js");


//calling the orm functions using specific burger functions
var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        })       
    },

    insertOne: function(burger_name, cb){
        orm.insertOne(burger_name, function(res){
            cb(res);
        })
    },

    updateOne: function(burgerID, cb){
        orm.updateOne(burgerID, function(res){
            cb(res);
        });
    }

};

//exporting functions for the controller
module.exports = burger;
