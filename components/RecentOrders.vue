<template>
    <div class="bg-white rounded-xl shadow-md p-4 mt-6">
        <h2 class="text-lg font-semibold mb-4">Recent Orders</h2>
        <DxDataGrid
            :data-source="recentOrders"
            :show-borders="true"
            :column-auto-width="true"
            :row-alternation-enabled="true"
            :show-column-lines="true"
            :show-row-lines="true"
        >
            <DxSearchPanel :visible="true" placeholder="Search..." />
            <DxPaging :page-size="5" />
            <DxPager
                :show-page-size-selector="true"
                :allowed-page-sizes="[5, 10]"
                :show-info="true"
            />
            <DxFilterRow :visible="true" />

            <DxColumn data-field="order" caption="Order #" />
            <DxColumn data-field="customer" />
            <DxColumn data-field="date" data-type="date" />
            <DxColumn data-field="amount" format="currency" />
            <DxColumn data-field="status" />
        </DxDataGrid>
    </div>
</template>

<script setup lang="ts">
import {
    DxDataGrid,
    DxColumn,
    DxSearchPanel,
    DxPaging,
    DxPager,
    DxFilterRow
} from "devextreme-vue/data-grid";

import { storeToRefs } from "pinia";
import { useDashboard } from "@/stores/useDashboard";

const { recentOrders } = storeToRefs(useDashboard());
</script>
