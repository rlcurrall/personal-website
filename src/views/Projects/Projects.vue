<template>
  <main class="container mx-auto p-8 md:px-0">
    <h1>
      Projects
    </h1>
    <p class="italic text-xs py-4 text-red-500">
      <i class="fas fa-tools" /> Under Construction
    </p>
    <p>
      These days my personal projects have taken a back seat to work. I have
      been teaching myself the
      <a href="https://www.rust-lang.org/" target="_blank">Rust</a> programming
      language by attempting to create a web application using
      <a href="https://github.com/actix/actix-web" target="_blank">Actix Web</a
      >.
    </p>
    <section class="flex flex-wrap justify-center">
      <template v-for="(project, index) in projects">
        <project-card :project="project" :key="index" />
      </template>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Project } from './types'
import ProjectCard from './components/ProjectCard.vue'

@Component({ components: { ProjectCard } })
export default class Projects extends Vue {
  projects: Array<Project> = [
    {
      title: 'JookBachs RS',
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
      title: 'Node Server',
      url: '/',
      description: 'A description about this project.',
      status: 'Inactive',
    },
  ]
}
</script>
