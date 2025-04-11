export interface Order {
    order: number;
    customer: string;
    date: string;
    amount: number;
    status: "Completed" | "Pending" | "Processing";
}

export interface DashboardData {
    totalSales: number;
    newCustomers: number;
    conversionRate: number;
    avgOrderValue: number;
    salesOverview: { month: string; sales: number; target: number }[];
    trafficSources: { source: string; value: number }[];
    recentOrders: Order[];
    message: string;
}
