<template>
  <main
    class="text-white flex flex-col items-start p-8 container mx-auto
    md:flex-row md:px-0"
  >
    <div class="mr-8 self-center md:self-start">
      <img
        alt="Robb Currall"
        src="@/assets/profile.jpg"
        class="border border-green-500 rounded-full w-32"
      />
    </div>
    <article>
      <h1>
        Welcome!
      </h1>
      <p class="my-8">
        I'm <b>Robb Currall</b>, a Christian, husband, and a dungeon master. I
        make a living developing software.
      </p>
      <p class="my-8">
        I graduated in December 2018 with a degree in computational science from
        the University of South Carolina Beaufort.
      </p>
      <p>
        I am currently working as a full-stack developer, developing web
        applications using Vue and Laravel; though I have started to find a
        passion for systems programming with Rust.
      </p>
    </article>
  </main>
</template>

<style scoped>
article {
  max-width: 42rem;
}
</style>
