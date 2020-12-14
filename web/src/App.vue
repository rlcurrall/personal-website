<template>
    <div id="app">
        <header id="nav" class="inset-y-0 bg-gray-900 border-b-4 border-green-500">
            <nav
                class="container mx-auto my-4 flex flex-col sm:flex-row justify-between items-center text-xl px-8 md:px-0"
            >
                <div class="flex justify-center flex-wrap my-1 sm:justify-start sm:m-0">
                    <router-link to="/" class="mx-4 hover:underline hover:text-green-500 sm:ml-0">Home</router-link>
                    <router-link to="/projects" class="mx-4 hover:underline hover:text-green-500">Projects</router-link>
                    <router-link to="/cv" class="mx-4 hover:underline hover:text-green-500 sm:mr-0">C.V.</router-link>
                </div>
                <div class="flex justify-center flex-wrap sm:justify-end my-1 sm:m-0">
                    <a href="https://github.com/rlcurrall" target="_blank" class="mx-2"
                        ><i class="fab fa-github hover:text-green-500"></i
                    ></a>
                    <a href="https://www.linkedin.com/in/robb-currall/" target="_blank" class="mx-2"
                        ><i class="fab fa-linkedin hover:text-green-500"></i
                    ></a>
                    <a href="https://twitter.com/RobbCurrall" target="_blank" class="mx-2"
                        ><i class="fab fa-twitter hover:text-green-500"></i
                    ></a>
                </div>
            </nav>
        </header>
        <router-view />
    </div>
</template>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    background-color: #232d3d;
    min-height: 100vh;
    @apply font-mono;
    @apply text-white;
}

a {
    @apply text-white;
}
</style>
