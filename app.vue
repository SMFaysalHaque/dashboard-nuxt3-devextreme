<template>
    <div class="bg-gray-100">
        <div class="flex justify-between items-center bg-white py-2 px-2">
            <button class="border border-gray-300 p-1 rounded">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#666666"
                >
                    <path
                        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                    />
                </svg>
            </button>
            <h1 class="text-lg font-semibold text-gray-500">
                DevExtreme Dashboard
            </h1>
            <button class="border border-gray-300 p-1 rounded">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#666666"
                >
                    <path
                        d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"
                    />
                </svg>
            </button>
        </div>
        <div class="flex min-h-screen">
            <!-- Sidebar -->
            <aside class="w-60 bg-white border-r shadow-md">
                <div class="h-1/2 bg-gray-200">
                    <nav class="flex flex-col mx-1 py-1">
                        <NuxtLink
                            to="/"
                            class="text-gray-700 hover:bg-gray-500 hover:text-white px-3 py-2 border-b border-gray-300"
                        >
                            Home
                        </NuxtLink>
                        <NuxtLink
                            to="/about"
                            class="text-gray-700 hover:bg-gray-500 hover:text-white px-3 py-2"
                        >
                            About
                        </NuxtLink>
                    </nav>
                </div>
            </aside>

            <div class="flex-1 flex flex-col m-4 p-4 bg-gray-200">
                <!-- Top Bar -->
                <header class="flex justify-end items-center gap-4 mb-5">
                    <button
                        class="flex items-center gap-2 bg-blue-600 text-white rounded text-sm font-medium px-5 py-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#FFFFFF"
                        >
                            <path
                                d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z"
                            />
                        </svg>
                        Refresh Data
                    </button>
                    <p class="text-sm text-gray-500">
                        Last updated: {{ lastUpdated }}
                    </p>
                </header>

                <!-- Page content -->
                <main class="p-0">
                    <NuxtPage />
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const lastUpdated = new Date().toLocaleTimeString();
</script>
