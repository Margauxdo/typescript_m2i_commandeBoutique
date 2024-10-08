import { Customer, Product, OrderItem, Order } from './interface';
import { createOrder, calculateTotalPrice } from './function';
import { OrderManage } from './shop';

const customer1: Customer = {id: 1,name: "John Doe",email: "john.doe@example.com"};
const customer2: Customer = {id: 2,name: "Toto tutu",email: "toto.tutu@example.com"};
const customer3: Customer = {id: 3,name: "Henry Bernard",email: "hb@example.com"};

const product1: Product = {id: 1, name: "T-shirt", price: 19.99, stock: 100};
const product2: Product = {id: 2, name: "Robe", price: 39.99, stock: 150};
const product3: Product = {id: 3, name: "Veste", price: 59.99, stock: 100};

const orderItem1: OrderItem = {product: product1, quantity: 2};
const orderItem2: OrderItem = {product: product3, quantity: 25};
const orderItem3: OrderItem = {product: product2, quantity: 5};

const order1: Order = createOrder(1, customer1, [orderItem2]);
const order2: Order = createOrder(3, customer2, [orderItem1]);
const order3: Order = createOrder(2, customer3, [orderItem3]);

const orderManage = new OrderManage();

orderManage.addOrder(order1);
orderManage.addOrder(order2);
orderManage.addOrder(order3);

console.log(orderManage.listOrdersByStatus('en attente')); 

orderManage.updateOrderStatus('1', 'expédiée');
console.log(orderManage.getOrdersById('1')); 
 

console.log(orderManage.listOrdersByStatus('en attente')); 





