<template>
    <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Traffic Sources</h3>

        <DxPieChart
            id="pie"
            :data-source="trafficSources"
            type="doughnut"
            title=""
            palette="Soft Pastel"
        >
            <DxSeries argument-field="source" value-field="value">
                <DxSmallValuesGrouping :top-count="3" mode="topN" />
                <DxLabel
                    :visible="true"
                    :customize-text="customizeLabel"
                    format="fixedPoint"
                >
                    <DxConnector :visible="true" :width="1" />
                </DxLabel>
            </DxSeries>

            <DxExport :enabled="true" />
            <DxLegend
                horizontal-alignment="center"
                vertical-alignment="bottom"
            />
        </DxPieChart>
    </div>
</template>

<script setup lang="ts">
import {
    DxPieChart,
    DxSeries,
    DxSmallValuesGrouping,
    DxLabel,
    DxConnector,
    DxExport,
    DxLegend
} from "devextreme-vue/pie-chart";

import { storeToRefs } from "pinia";
import { useDashboard } from "@/stores/useDashboard";

const { trafficSources } = storeToRefs(useDashboard());

const customizeLabel = ({ valueText }: { valueText: string }) => valueText;
</script>

<style scoped>
#pie {
    height: 440px;
}
</style>
