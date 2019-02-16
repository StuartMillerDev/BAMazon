var inquirer = require ("inquirer");
var mysql= require ("mysql");
ask();
function ask(operation){
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

  });

}
