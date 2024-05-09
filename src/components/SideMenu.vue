<script setup lang="ts">
import Menu from 'vue-material-design-icons/Menu.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import Twitch from 'vue-material-design-icons/Twitch.vue'
import Insta from 'vue-material-design-icons/Instagram.vue'

</script>

<template>
    <nav class="fixed z-50 text-white right-64 top-20">
        <ul class="flex flex-col gap-5">
            <li class="mb-12"><Menu/></li>
            <li><Twitter/></li>
            <li><Twitch/></li>
            <li><Insta/></li>
        </ul>
    </nav>
</template>