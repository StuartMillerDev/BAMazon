drop database if exists bamazon;
create database bamazon;
use bamazon;
create table products(
item_id int auto_increment not null,
product_name varchar(50) not null,
department_name varchar(50),
price float(4) not null default 0,
stock_quantity int not null default 0,
primary key (item_id)
);

insert into products(product_name,department_name,price,stock_quantity)values("Xbox 360","Computer",499.99,123);
insert into products(product_name,department_name,price,stock_quantity)values("PlayStation","Computer",399.99,83);
insert into products(product_name,department_name,price,stock_quantity)values("Kitchen Clock","Home",39.99,71);
insert into products(product_name,department_name,price,stock_quantity)values("Oven Glove","Home",19.99,235);
insert into products(product_name,department_name,price,stock_quantity)values("Stove Top Cleaner","Home",29.99,12);
insert into products(product_name,department_name,price,stock_quantity)values("Shoe Magnets","Clothing",19.99,345);
insert into products(product_name,department_name,price,stock_quantity)values("Jones Winter Jacket","Clothing",79.99,40);
insert into products(product_name,department_name,price,stock_quantity)values("Jones Winter Pants","Clothing",49.99,12);
insert into products(product_name,department_name,price,stock_quantity)values("10000 lmn FlashLight","Tools",99.99,97);
insert into products(product_name,department_name,price,stock_quantity)values("Jones 10 Man tent","Outdoors",299.99,15);
insert into products(product_name,department_name,price,stock_quantity)values("Daves Double Hammock","Outdoors",29.99,50);
insert into products(product_name,department_name,price,stock_quantity)values("Tony Dangs Dang Good Hotsauce","Food",9.99,23);
insert into products(product_name,department_name,price,stock_quantity)values("Z3000 Power Brush","Tools",149.99,29);
