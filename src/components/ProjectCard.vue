<template>
    <a
        class="
            flex flex-col items-center w-64 h-64 m-4 bg-gray-200 overflow-hidden
            rounded border-0 text-black shadow-xl hover:no-underline
            focus:outline-none focus:ring focus:border-green-300 scale-up-center
          "
        :href="project.url"
        target="_blank"
    >
        <div class="py-1 bg-gray-300 w-full text-center text-green-500">
            {{ project.title }}
        </div>
        <div class="p-2 flex-grow text-sm">
            {{ project.description }}
        </div>
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
        project: { type: Object, required: true },
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
