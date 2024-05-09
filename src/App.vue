<script setup>
  import Player from './components/Player.vue';
  import Streamer from './components/Streamer.vue';
  import ListenButton from './components/Buttons/ListenButton.vue';
import ShareButton from './components/Buttons/ShareButton.vue';
import SideMenu from './components/SideMenu.vue';
</script>

<template>
  
  <main>
    <SideMenu />
    
    <div class="flex flex-col items-center w-full backdrop-blur-sm">
      <div class="flex flex-col items-center w-[60%] pt-[10%] gap-20">

        <section class="flex gap-[7%] w-full text-white">
          <div class="flex gap-2">
            <div class="flex gap-3 font-medium text-[#91171F] album-release italic">Creepy Show<div class="flex gap-3 text-white"><span>—</span> Released April 11 2018</div></div>
            <img src="/src/assets/nun.jpg" class="box-img" />
          </div>
          <div class="flex flex-col self-center">
            <h1 class="tracking-wide bg-white text-8xl album-name bg-clip-text">Creep Show</h1>
            <p class="text-3xl font-bold tracking-tight">Creepy Nuts</p>
  
            <div class="flex items-center gap-2 mt-10 font-semibold text-white">
              <ListenButton />
              <ShareButton />
            </div>
          </div>
        </section>

        <section class="flex flex-col w-full gap-5 text-white">
          <h2 class="text-5xl font-bold tracking-wide text-white">STREAM IT YOUR WAY</h2>
          <Streamer />
        </section>

        <section class="flex flex-col w-full gap-16 text-white">
          <h3 class="text-5xl font-bold tracking-wide text-white">TRACK LIST</h3>
          <ol class="flex flex-col w-full gap-6 list-decimal list-inside">
            <Player song="犬も食わない" author="Creepy Nuts" />
            <Player song="Shin gouhoutekitobikatanosusume" author="Creepy Nuts" />
            <Player song="だがそれでいい" author="Creepy Nuts" />
            <Player song="俺から退屈を奪わないでくれ" author="Creepy Nuts" />
            <Player song="解雇" author="Creepy Nuts" />
            <Player song="SpotLight" author="Creepy Nuts" />
            <Player song="月に飛べ" author="Creepy Nuts" />
          </ol>
        </section>

        <section class="flex flex-col w-full text-white gap-14">
          <h4 class="text-5xl font-bold tracking-wide text-white">Music Video</h4>
          <iframe class="w-full h-[657px]" src="https://www.youtube.com/embed/5LlhBfF5EUQ?si=gyx9I9GAttTX3keN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>

        <footer class="grid items-start justify-between w-full grid-cols-3 py-10 text-xl font-extrabold tracking-wider text-white border-y">
          <div class="flex flex-col">
            <div>ABOUT US</div>
            <div>CONTACT US</div>
            <div>NEWS</div>
          </div>
          <div>
            <div>TERMS OF SERVICE</div>
            <div>PRIVACY POLICY</div>
          </div>
          <div>
            <div>Music News letter</div>
            <p class="text-lg italic text-gray-500">Don't miss a thing, stay up to date with the latest news from us.</p>
          </div>
        </footer>

      </div>
    </div>
  </main>
</template>
