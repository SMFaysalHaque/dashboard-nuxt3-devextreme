<template>
    <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Sales Overview</h3>
        <DxChart id="chart" :data-source="salesOverview">
            <DxSeries
                value-field="sales"
                argument-field="month"
                name="My Oranges"
                type="bar"
                color="skyblue"
            />
        </DxChart>
    </div>
</template>

<script setup lang="ts">
import { DxChart, DxSeries } from "devextreme-vue/chart";

import { storeToRefs } from "pinia";
import { useDashboard } from "@/stores/useDashboard";

const { salesOverview } = storeToRefs(useDashboard());
</script>

<style scoped>
#chart {
    height: 440px;
}
</style>
