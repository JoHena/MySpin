<script setup lang="ts">
    import Play from 'vue-material-design-icons/Play.vue'
    import Spotify from 'vue-material-design-icons/Spotify.vue'
    import Apple from 'vue-material-design-icons/Apple.vue'
    import Soundcloud from 'vue-material-design-icons/Soundcloud.vue'
    import Youtube from 'vue-material-design-icons/Youtube.vue'
</script>

<template>
    <ul class="flex border border-white w-fit *:px-4 *:py-4">
        <li class="flex gap-2 font-bold tracking-widest border-r"> <Play/> Player</li>
        <li class="flex gap-2 border-r"><Spotify/></li>
        <li class="border-r"><Apple/></li>
        <li class="border-r p-"><Soundcloud/></li>
        <li class="border-r"><Youtube/></li>
    </ul>
</template>