<script setup lang="ts">
import { usePlayerStore } from '@/stores/playerStore';

const playerStore = usePlayerStore();

const volume = ref(playerStore.volume);
const volume_steps = 50;

const song = ref('https://radio.rab-devs.com/listen/rab_radio/radio.mp3');
const song_liked = ref(false);

let player: HTMLAudioElement | null = null;

function changePlaybackStatus() {
    if (player!.paused) {
        player!.volume = volume.value / volume_steps;
        player!.play();
    } else {
        player!.pause();
    }
}

function changeVolume() {
    player!.volume = volume.value / volume_steps;
    playerStore.setVolume(volume.value);
}

function changeMuteStatus() {
    player!.muted = !player!.muted;
}

function changeSongLikeStatus() {
    song_liked.value = !song_liked.value;
}

onMounted(() => {
    player = document.getElementById('player') as HTMLAudioElement;
});
</script>

<template>
    <div class="flex btm-nav h-28 lg:pl-64 bg-gray-50">
        <div class="flex flex-row items-center space-x-5">
            <div class="avatar">
                <div class="w-20 mask mask-squircle">
                    <img
                        src="https://www.rab-devs.com/media/pages/rafa/rafa.jpg" />
                </div>
            </div>
            <div class="flex flex-col -space-y-0.5 text-left">
                <span class="text-lg font-semibold"> Proyecto TFG </span>
                <span class="font-normal text-gray-600"> Hola, Michelle </span>
            </div>
            <button type="button" @click="changeSongLikeStatus()">
                <i
                    v-if="song_liked"
                    class="mt-1 text-2xl text-gray-800 i-mdi-heart" />
                <i
                    v-else
                    class="mt-1 text-2xl text-gray-800 i-mdi-heart-outline" />
            </button>
        </div>
        <div class="flex">
            <div class="flex flex-row items-center space-x-6">
                <audio id="player" hidden="true" ref="audio">
                    <source :src="song" type="audio/mp3" />
                </audio>
                <button>
                    <i class="mt-1 text-2xl text-gray-800 i-mdi-shuffle" />
                </button>
                <div class="flex items-center space-x-4">
                    <button>
                        <i
                            class="mt-1 text-3xl text-gray-800 i-mdi-skip-previous" />
                    </button>
                    <label
                        class="bg-gray-800 btn btn-circle swap swap-rotate hover:bg-gray-600">
                        <input
                            @change="changePlaybackStatus()"
                            type="checkbox" />
                        <i class="text-2xl text-white swap-off i-mdi-play" />
                        <i class="text-2xl text-white swap-on i-mdi-pause" />
                    </label>
                    <button>
                        <i
                            class="mt-1 text-3xl text-gray-800 i-mdi-skip-next" />
                    </button>
                </div>
                <button>
                    <i class="mt-1 text-2xl text-gray-800 i-mdi-repeat" />
                </button>
            </div>
            <div class="flex items-center space-x-4">
                <span>1:00</span>
                <progress class="w-56 progress" value="33" max="100"></progress>
                <span>3:00</span>
            </div>
        </div>
        <div>
            <div class="flex flex-row items-center space-x-2">
                <label class="swap">
                    <input @change="changeMuteStatus()" type="checkbox" />
                    <i
                        class="text-3xl text-gray-800 swap-off i-mdi-volume-high" />
                    <i
                        class="text-3xl text-gray-800 swap-on i-mdi-volume-mute" />
                </label>
                <input
                    id="volume"
                    type="range"
                    min="0"
                    :max="volume_steps"
                    v-model="volume"
                    @change="changeVolume()"
                    class="range range-xs" />
            </div>
        </div>
    </div>
</template>

<style>
.btm-nav > * {
    @apply cursor-default;
}
</style>
