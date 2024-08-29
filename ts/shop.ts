import { Order } from "./interface";

export class OrderManage{
    private orders: Order[] = [];

   addOrder(order: Order): void { 
    this .orders.push(order);
 } 

    getOrdersById(id : string): Order |undefined  {
        return this.orders.find((order) => order.id.toString() === id);
    }
    updateOrderStatus(id: string, status: 'en attente' | 'expédiée' | 'livrée') {
        const order = this.getOrdersById(id);
        if(order){
            order.status = status;
        }
        return order;

    }
    listOrdersByStatus (status: 'en attente' | 'expédiée' | 'livrée'){
        return this.orders.filter((order) => order.status === status);
    }

}