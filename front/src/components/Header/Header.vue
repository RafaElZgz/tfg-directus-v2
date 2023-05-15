<script setup lang="ts">
var areNotifications = ref(false);
</script>

<template>
    <header class="flex items-center w-full py-3 md:py-4 md:px-6">
        <label
            for="my-drawer-2"
            class="ml-4 md:ml-0 mr-auto md:mr-0 flex items-center p-1.5 text-3xl bg-white border border-gray-300 shadow-md drawer-button lg:hidden rounded-xl hover:bg-gray-800 hover:text-gray-300">
            <i class="i-mdi-menu" />
        </label>
        <div class="hidden ml-6 mr-auto shadow-md rounded-xl md:block">
            <div class="flex">
                <input
                    disabled
                    type="text"
                    placeholder="Buscar …"
                    class="px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-l-xl" />
                <button
                    type="button"
                    class="flex items-center px-3 -ml-1 text-white bg-gray-800 rounded-r-xl hover:bg-gray-600">
                    <i class="text-2xl i-mdi-magnify" />
                </button>
            </div>
        </div>
        <div class="relative mr-4 md:mr-6">
            <span
                v-if="areNotifications"
                class="absolute -right-0.5 w-4 h-4 bg-red-600 rounded-full -top-1"></span>
            <button
                type="button"
                class="flex items-center p-3 bg-gray-800 rounded-full shadow-xl hover:bg-gray-600">
                <i class="text-xl text-white md:text-2xl i-mdi-bell" />
            </button>
        </div>
        <button
            type="button"
            class="mr-4 sm:mr-8 md:mr-4 flex p-1 space-x-4 bg-white border border-gray-300 rounded-full shadow-md md:p-1.5">
            <div class="avatar">
                <div class="w-14 md:w-16 mask mask-circle">
                    <img
                        src="https://www.rab-devs.com/media/pages/rafa/rafa.jpg" />
                </div>
            </div>
            <div class="flex flex-col pr-5 my-auto tracking-tight text-left">
                <span class="font-semibold md:text-xl"> Rafa Alastuey </span>
                <span class="text-sm">@RafaEl.Zgz</span>
            </div>
        </button>
    </header>
</template>
