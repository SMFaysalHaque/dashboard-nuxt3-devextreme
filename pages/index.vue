<script setup lang="ts">
definePageMeta({ layout: "default" });
</script>

<template>
    <div class="space-y-4">
        <DashboardCards />
        <div class="grid grid-cols-2 gap-4">
            <SalesOverview />
            <TrafficSources />
        </div>
        <RecentOrders />
        <MessageBox />
    </div>
</template>

<style lang="scss" scoped></style>
