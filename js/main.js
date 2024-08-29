"use strict";
function createOrder(id, customer, items) {
    let order = {
        id: id,
        customer: customer,
        items: items,
        status: "en attente"
    };
    return order;
}
function calculateTotalPrice(order) {
    let totalPrice = 0;
    order.items.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
}
class OrderManage {
    constructor() {
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrdersById(id) {
        return this.orders.find((order) => order.id.toString() === id);
    }
    updateOrderStatus(id, status) {
        const order = this.getOrdersById(id);
        if (order) {
            order.status = status;
        }
        return order;
    }
    listOrdersByStatus(status) {
        return this.orders.filter((order) => order.status === status);
    }
}
const customer1 = { id: 1, name: "John Doe", email: "john.doe@example.com" };
const customer2 = { id: 2, name: "Toto tutu", email: "toto.tutu@example.com" };
const customer3 = { id: 3, name: "Henry Bernard", email: "hb@example.com" };
const product1 = { id: 1, name: "T-shirt", price: 19.99, stock: 100 };
const product2 = { id: 2, name: "Robe", price: 39.99, stock: 150 };
const product3 = { id: 3, name: "Veste", price: 59.99, stock: 100 };
const orderItem1 = { product: product1, quantity: 2 };
const orderItem2 = { product: product3, quantity: 25 };
const orderItem3 = { product: product2, quantity: 5 };
const order1 = createOrder(1, customer1, [orderItem2]);
const order2 = createOrder(3, customer2, [orderItem1]);
const order3 = createOrder(2, customer3, [orderItem3]);
const orderManage = new OrderManage();
orderManage.addOrder(order1);
orderManage.addOrder(order2);
orderManage.addOrder(order3);
console.log(orderManage.listOrdersByStatus('en attente'));
orderManage.updateOrderStatus('1', 'expédiée');
console.log(orderManage.getOrdersById('1'));
console.log(orderManage.listOrdersByStatus('en attente'));
