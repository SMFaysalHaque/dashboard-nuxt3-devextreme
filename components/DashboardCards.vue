<template>
    <div class="grid grid-cols-4 gap-4">
        <div
            class="p-4 bg-white rounded-lg shadow"
            v-for="(card, index) in cards"
            :key="index"
        >
            <div class="flex justify-between text-green-500">
                <p class="text-sm text-gray-500">{{ card.title }}</p>
                <p>↑ {{ card.growth }}%</p>
            </div>
            <h2 class="text-xl font-bold">{{ card.value }}</h2>
            <p class="text-xs">vs previous month</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDashboard } from "@/stores/useDashboard";

const dashboard = useDashboard();
const { totalSales, newCustomers, conversionRate, avgOrderValue } =
    storeToRefs(dashboard);

const cards = [
    { title: "Total Sales", value: `$${totalSales.value}`, growth: 12.5 },
    { title: "New Customers", value: newCustomers.value, growth: 8.2 },
    { title: "Conversion Rate", value: `${conversionRate.value}%`, growth: 0 },
    { title: "Avg. Order Value", value: `$${avgOrderValue.value}`, growth: 4.3 }
];
</script>
