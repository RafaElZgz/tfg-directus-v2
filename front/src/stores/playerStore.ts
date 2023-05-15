import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('playerStore', {
    state: () => ({
        volume: 25,
    }),

    getters: {},

    actions: {
        setVolume(volume: number) {
            this.volume = volume;
        },
    },

    persist: true,
});
