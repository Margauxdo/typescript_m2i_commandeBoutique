export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
}
export interface OrderItem{
    product: Product;
    quantity: number;
}

export interface Order {
    id: number;
    customer: Customer;
    items: OrderItem[];
    status: "en attente" | "expédiée" | "livrée";
}