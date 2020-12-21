<template>
    <main class="container mx-auto p-8 md:px-0">
        <h1>Cirriculum Vitae</h1>
        <p class="text-red-500 py-4 text-xs italic"><i class="fas fa-tools" /> Under Construction</p>
        <a :href="`https://drive.google.com/uc?export=download&id=${resumeId}`">
            PDF Download
        </a>
    </main>
</template>

<script>
export default {
    setup() {
        const resumeId = '1w0aGvBjc1HyzqOuUPD3-Z4Id_xwLdDf5';

        return { resumeId };
    },
};
</script>
