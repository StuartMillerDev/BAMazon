var inquirer = require ("inquirer");
var mysql= require ("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

// makeConnection();
printAll();
ask();
function makeConnection(){
  connection.connect(function(err) {
    if (err) throw err;
    console.log("\nconnected as id " + connection.threadId);
  });
}


function printAll(){
  // makeConnection();
  connection.query("SELECT * FROM products",function(err,res){
    if(err){
        console.log(err);
        connection.end();
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
]).then(function(response){

      var id=response.id;
      var quantity=response.quantity;
      connection.query("select * from products where item_id=?",[id],function(err,res){
        if(err){
          console.log(err);
        }
        else {
          var temp=checkStock(id);
          console.log(temp);
          // if(){
          //
          // }
          // updateStock(id,quantity);
          // ask();
        }
      });
  });
}


function checkStock(id){

  connection.query("Select * from products where item_id=?",[id],function(err,res){
    if(err){
      console.log(err);
    }
    else{
      return res[0].stock_quantity;
    }
  });
}

function updateStock(id, quantity){
connection.query("UPDATE products as p set p.stock_quantity= p.stock_quantity-? where p.item_id=?",[quantity,id],function(err,res){
if (err) {
  console.log(err);
}
else {
  console.log("\nUPDATED");
}
});

}
