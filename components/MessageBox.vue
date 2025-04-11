<template>
    <div class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Test Message</h3>
        <p class="mb-2">Message: {{ message }}</p>
        <input
            v-model="newMessage"
            type="text"
            class="border p-2 w-full rounded mb-2"
            placeholder="Enter new message"
        />
        <button
            @click="updateMessage"
            class="bg-blue-500 text-white px-4 py-2 rounded"
        >
            Update Message
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDashboard } from "@/stores/useDashboard";

const dashboard = useDashboard();
const message = dashboard.message;
const newMessage = ref("");

function updateMessage() {
    if (newMessage.value) {
        dashboard.updateMessage(newMessage.value);
        newMessage.value = "";
    }
}
</script>
