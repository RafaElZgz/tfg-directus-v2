<template>
    <div class="bg-gray-200 drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="flex flex-col items-center justify-center drawer-content">
            <Header />
            <main class="w-full h-screen pb-32">
                <NuxtPage />
            </main>
            <Player />
        </div>
        <Sidebar />
    </div>
</template>
