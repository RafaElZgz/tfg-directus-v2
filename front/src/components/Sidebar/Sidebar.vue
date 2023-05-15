<script setup lang="ts">
interface SidebarLink {
    name: string;
    icon: string;
    path: string;
}

const sidebar_link_main: SidebarLink[] = [
    {
        name: 'Inicio',
        icon: 'i-mdi-home',
        path: '/',
    },
    {
        name: 'Tendencias',
        icon: 'i-mdi-trending-up',
        path: '/trending',
    },
];

const sidebar_links_fav: SidebarLink[] = [
    {
        name: 'Canciones',
        icon: 'i-mdi-music-note',
        path: '/songs',
    },
    {
        name: 'Artistas',
        icon: 'i-mdi-account-music',
        path: '/artists',
    },
    {
        name: 'Álbumes',
        icon: 'i-mdi-album',
        path: '/albums',
    },
    {
        name: 'Playlists',
        icon: 'i-mdi-playlist-music',
        path: '/playlists',
    },
];

var isLoggedIn = ref(true);
</script>

<template>
    <div class="overflow-hidden border-r border-gray-200 drawer-side sidebar">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <div class="w-64 p-4 text-gray-800 bg-gray-50 menu">
            <div class="flex items-center py-4 -mt-1 md:mt-1">
                <span class="w-full text-3xl font-bold text-center">
                    MusiAI
                </span>
            </div>
            <ul class="mt-4 space-y-3 font-semibold text-gray-600 lg:mt-8">
                <li v-for="link in sidebar_link_main">
                    <NuxtLink :to="link.path" class="sidebar-link">
                        <i :class="`mr-0.5 ${link.icon} mt-0.5`" />
                        <span>{{ link.name }}</span>
                    </NuxtLink>
                </li>
            </ul>
            <ul class="mt-6 space-y-3 font-semibold text-gray-600 md:mt-8">
                <span class="ml-2 text-lg text-gray-400">Favoritos</span>
                <li v-for="link in sidebar_links_fav">
                    <NuxtLink :to="link.path" class="sidebar-link">
                        <i :class="`mr-0.5 ${link.icon} mt-0.5`" />
                        <span>{{ link.name }}</span>
                    </NuxtLink>
                </li>
            </ul>
            <ul class="mt-6 space-y-3 font-semibold text-gray-600 md:mt-8">
                <span class="ml-2 text-lg text-gray-400">Cuenta</span>
                <li>
                    <NuxtLink
                        to="/users/me"
                        class="border border-gray-200 sidebar-link">
                        <i class="mr-0.5 i-mdi-account mt-0.5" />
                        <span>Ajustes</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        v-if="!isLoggedIn"
                        to="/logout"
                        class="sidebar-link">
                        <i class="mr-0.5 i-mdi-logout mt-0.5" />
                        <span>Iniciar sesión</span>
                    </NuxtLink>
                    <button v-else class="border border-gray-200">
                        <i class="mr-0.5 i-mdi-login mt-0.5 rotate-180" />
                        <span>Cerrar sesión</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.sidebar-link:hover {
    @apply scale-105;
}

.sidebar-link {
    @apply border border-gray-200;
}

.sidebar-link.router-link-exact-active {
    @apply bg-indigo-600 text-white shadow;
}

.sidebar::-webkit-scrollbar {
    width: 12px;
}

.sidebar::-webkit-scrollbar-track {
    background: #f9fafb;
}

.sidebar::-webkit-scrollbar-thumb {
    background-color: #4b5563;
    border-radius: 20px;
    border: 3px solid #f9fafb;
}
</style>
