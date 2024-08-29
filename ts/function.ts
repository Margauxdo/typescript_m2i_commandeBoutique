import { Customer, Order, OrderItem } from "./interface";

export function createOrder (id : number, customer: Customer, items: OrderItem[]): Order {
    let order : Order = {
        id: id,
        customer: customer,
        items: items,
        status: "en attente"
        
    }
    return order;

}

export function calculateTotalPrice(order: Order): number {
    let totalPrice = 0;
    order.items.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
}