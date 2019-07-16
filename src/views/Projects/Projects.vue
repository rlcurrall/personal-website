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
      <a :href="rustLink" target="_blank">Rust</a> programming language by
      attempting to create a web application using
      <a :href="actixLink" target="_blank">Actix Web</a>.
    </p>
    <section class="flex flex-wrap justify-center">
      <template v-for="(project, index) in projects">
        <ProjectCard :project="project" :key="index" />
      </template>
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Project } from './types'
import ProjectCard from './components/ProjectCard.vue'

import myProjects from '@/data/projects.json'

@Component({ components: { ProjectCard } })
export default class Projects extends Vue {
  projects: Array<Project> = myProjects
  actixLink: String = 'https://github.com/actix/actix-web'
  rustLinkk: String = 'https://www.rust-lang.org/'
}
</script>
