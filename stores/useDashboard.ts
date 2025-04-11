import { defineStore } from "pinia";
import type { DashboardData } from "@/types/dashboard";

export const useDashboard = defineStore("dashboard", {
    state: (): DashboardData => ({
        totalSales: 24543,
        newCustomers: 145,
        conversionRate: 4,
        avgOrderValue: 169,
        salesOverview: [
            { month: "Jan", sales: 3000, target: 3500 },
            { month: "Feb", sales: 3500, target: 4000 },
            { month: "Mar", sales: 4000, target: 4500 },
            { month: "Apr", sales: 4700, target: 5000 },
            { month: "May", sales: 5100, target: 5500 },
            { month: "Jun", sales: 5800, target: 6000 }
        ],
        trafficSources: [
            { source: "Organic Search", value: 5600 },
            { source: "Direct", value: 3800 },
            { source: "Social Media", value: 2800 },
            { source: "Referral", value: 1300 },
            { source: "Email", value: 1900 }
        ],
        recentOrders: [
            {
                order: 1001,
                customer: "John Smith",
                date: "11/01/2023",
                amount: 246,
                status: "Completed"
            },
            {
                order: 1002,
                customer: "Sarah Johnson",
                date: "11/02/2023",
                amount: 190,
                status: "Processing"
            },
            {
                order: 1003,
                customer: "Michael Brown",
                date: "11/03/2023",
                amount: 326,
                status: "Pending"
            },
            {
                order: 1004,
                customer: "Emma Davis",
                date: "11/04/2023",
                amount: 412,
                status: "Completed"
            },
            {
                order: 1005,
                customer: "Robert Wilson",
                date: "11/05/2023",
                amount: 178,
                status: "Processing"
            }
        ],
        message: "Hello from Pinia"
    }),

    actions: {
        updateMessage(newMsg: string) {
            this.message = newMsg;
        }
    }
});
