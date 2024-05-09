<script setup lang="ts">
import Play from 'vue-material-design-icons/PlayOutline.vue'
import Share from 'vue-material-design-icons/Share.vue'

interface PlayerProps {
    song: string,
    author: string
}

defineProps<PlayerProps>()

</script>

<template>
    <li class="flex items-center w-full font-bold border-r border-white">
            <div class="flex items-center w-5/6 gap-5">
                <Play class="transition-colors h-fit hover:text-white" />
            <div>
                <div>{{song}}</div>
                <div>{{author}}</div>
            </div>
        </div>

        <div class="w-1/12">
            3:00
        </div>

        <div class="w-1/12">
            <Share />
        </div>
    </li>
</template>