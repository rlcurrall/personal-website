<template>
    <main class="container mx-auto p-8 md:px-0">
        <h1>
            Projects
        </h1>
        <p class="my-8">
            These days my personal projects have taken a back seat to work. I have been teaching myself the
            <a :href="rustLink" target="_blank">Rust</a> programming language through various small projects and coding
            challenges, such as creating a web application using <a :href="actixLink" target="_blank">Actix Web</a>.
        </p>
        <section class="flex flex-wrap justify-center">
            <project-card v-for="(project, index) in projects" :key="index" :project="project" />
        </section>
    </main>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import projects from '../data/projects.json';

export default {
    components: { ProjectCard },
    setup() {
        const actixLink = 'https://github.com/actix/actix-web';
        const rustLink = 'https://www.rust-lang.org';

        return { actixLink, rustLink, projects };
    },
};
</script>
