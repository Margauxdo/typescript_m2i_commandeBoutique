export class OrderManage {
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
