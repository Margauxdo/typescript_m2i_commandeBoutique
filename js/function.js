export function createOrder(id, customer, items) {
    let order = {
        id: id,
        customer: customer,
        items: items,
        status: "en attente"
    };
    return order;
}
export function calculateTotalPrice(order) {
    let totalPrice = 0;
    order.items.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
}
