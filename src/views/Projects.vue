<template>
  <main class="container mx-auto p-8 md:px-0">
    <h1>This is a projects page</h1>
    <p class="text-yellow-500"><i class="fas fa-tools" /> Under Construction</p>
    <section class="flex flex-wrap justify-center">
      <template v-for="(project, index) in projects">
        <a
          class="flex flex-col items-center w-64 h-64 m-4 bg-gray-800 scale-up-center rounded border-0 overflow-hidden"
          :key="index"
          :href="project.url"
        >
          <div class="bg-gray-900 w-full text-center text-green-500">
            {{ project.title }}
          </div>
          <div class="p-2 flex-grow">{{ project.description }}</div>
          <div class="w-full p-2 flex justify-end">
            <span
              class="rounded p-1 text-black text-xs"
              :class="
                project.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'
              "
            >
              {{ project.status }}
            </span>
          </div>
        </a>
      </template>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface Project {
  title: string
  url: string
  description: string
  status: string
}

@Component
export default class Projects extends Vue {
  projects: Array<Project> = [
    {
      title: 'Node Server',
      url: '/',
      description: 'A description about this project.',
      status: 'Active',
    },
    {
      title: 'JookBachs JS',
      url: '/',
      description: 'A description about this project.',
      status: 'Inactive',
    },
    {
      title: 'JookBachs RS',
      url: '/',
      description: 'A description about this project.',
      status: 'Inactive',
    },
  ]
}
</script>

<style lang="sass" scoped>
.scale-up-center
  transition: transform 0.3s ease-in-out
.scale-up-center:hover
  transform: scale(1.1)
</style>
