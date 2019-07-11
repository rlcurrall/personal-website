<template>
  <main
    class="text-white flex flex-col items-start p-8 container mx-auto
    md:flex-row md:px-0"
  >
    <div class="mr-8 self-center md:self-start">
      <img
        alt="Vue logo"
        src="../assets/profile.jpg"
        class="border border-green-500 rounded-full w-32"
      />
    </div>
    <article>
      <h1 class="text-lg border-l border-green-500 pl-2">Welcome!</h1>
      <p class="my-8">
        I'm <b class="text-green-500">Robb Currall</b>, a Christian, husband,
        dungeon master, and I make a living as a software engineer.
      </p>

      <p class="my-8">
        I graduated in December 2018 with a degree in computational science from
        the University of South Carolina Beaufort.
      </p>
    </article>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({ components: { HelloWorld } })
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
article
  max-width: 42rem
</style>
