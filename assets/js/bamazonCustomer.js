var inquirer = require ("inquirer");
var mysql= require ("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});
printAll();
ask();
function makeConnection(){
  connection.connect(function(err) {
    if (err) throw err;
    console.log("\nconnected as id " + connection.threadId);
  });
}


function printAll(){
  makeConnection();
  connection.query("SELECT * FROM products",function(err,res){
    if(err){
        console.log(err);
      }
      else {
        // console.log(res);
        res.forEach(function(item){
            console.log("\n----------");
            console.log("Item ID: "+item.item_id);
            console.log("Product Name: "+item.product_name);
            console.log("Department: "+item.department_name);
            console.log("Price: $"+item.price);
            console.log("Number In Stock: "+item.stock_quantity);
        });
      }
  });
  connection.end();
}



function ask(){
  inquirer.prompt([
  {
  type:"input",
  message:"Please input the ID of the item you want to select",
  name:"id"
  },
  {
    type:"input",
    message:"Input quantity to order",
    name:"quantity"
  }
  ]).then(function(res){
    var id=res.id;
    var q=res.quantity;
    checkStock(id);
  });

}


function checkStock(id){
  makeConnection();
  connection.query("Select * from products where ?=?",[item_id,id],function(err,res){
    if(err){
      console.log(err);
    }
    else{
      console.log(res);
    }
  });
  connection.end();
}

// function updateStock(id, quantity){
// makeConnection();
// connection.query("update products set stock_quantity-? where ?=?",[quantity,item_id,id],function(err,res){
// if (err) {
//   console.log(err);
// }
// else {
//   console.log(res);
// }
// });
// connection.end();
// }
