<template>
    <a
        class="
            flex flex-col items-center w-64 h-64 m-4 bg-gray-800 overflow-hidden
            rounded border-0 text-white shadow-xl hover:no-underline scale-up-center
          "
        :href="project.url"
        target="_blank"
    >
        <div class="bg-gray-900 w-full text-center text-green-500">
            {{ project.title }}
        </div>
        <div class="p-2 flex-grow">{{ project.description }}</div>
        <div class="w-full p-2 flex justify-end">
            <span
                class="rounded p-1 text-black text-xs"
                :class="project.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'"
            >
                {{ project.status }}
            </span>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.scale-up-center {
    transition: transform 0.3s ease-in-out;
}
.scale-up-center:hover {
    transform: scale(1.1);
}
</style>
