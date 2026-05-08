export interface DashboardMetrics {
  revenue: {
    total: number;
    currency: string;
  };
  topProducts: TopProduct[];
  recentOrders: RecentOrder[];
  orderStatus: OrderStatusSummary;
}

export interface TopProduct {
  productId: string;
  name: string;
  unitsSold: number;
  revenue: number;
}

export interface RecentOrder {
  orderId: string;
  customerId: string;
  customerName: string;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: string;
}

export interface OrderStatusSummary {
  pending: number;
  confirmed: number;
  shipped: number;
  delivered: number;
}
