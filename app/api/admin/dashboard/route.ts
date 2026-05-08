import { DashboardMetrics } from '@/lib/types/dashboard';
import { NextResponse } from 'next/server';

// Mock data - replace with real database queries later
const mockMetrics: DashboardMetrics = {
  revenue: {
    total: 45230.50,
    currency: 'USD',
  },
  topProducts: [
    {
      productId: '1',
      name: 'Premium Wireless Headphones',
      unitsSold: 156,
      revenue: 12480,
    },
    {
      productId: '2',
      name: 'USB-C Hub',
      unitsSold: 243,
      revenue: 7290,
    },
    {
      productId: '3',
      name: 'Laptop Stand',
      unitsSold: 189,
      revenue: 5670,
    },
    {
      productId: '4',
      name: 'Mechanical Keyboard',
      unitsSold: 124,
      revenue: 9920,
    },
    {
      productId: '5',
      name: 'Monitor Light Bar',
      unitsSold: 98,
      revenue: 4900,
    },
  ],
  recentOrders: [
    {
      orderId: 'ORD-001',
      customerId: 'cust-1',
      customerName: 'Alice Johnson',
      totalAmount: 249.99,
      status: 'shipped',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      orderId: 'ORD-002',
      customerId: 'cust-2',
      customerName: 'Bob Smith',
      totalAmount: 149.50,
      status: 'confirmed',
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    },
    {
      orderId: 'ORD-003',
      customerId: 'cust-3',
      customerName: 'Carol Davis',
      totalAmount: 899.99,
      status: 'pending',
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    },
    {
      orderId: 'ORD-004',
      customerId: 'cust-4',
      customerName: 'David Wilson',
      totalAmount: 499.00,
      status: 'delivered',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      orderId: 'ORD-005',
      customerId: 'cust-5',
      customerName: 'Emma Brown',
      totalAmount: 299.99,
      status: 'shipped',
      createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    },
  ],
  orderStatus: {
    pending: 12,
    confirmed: 28,
    shipped: 45,
    delivered: 156,
  },
};

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: mockMetrics,
        error: null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Dashboard metrics error:', error);
    return NextResponse.json(
      {
        success: false,
        data: null,
        error: 'Failed to fetch dashboard metrics',
      },
      { status: 500 }
    );
  }
}
