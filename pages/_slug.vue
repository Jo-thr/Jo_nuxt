<template>
  <div class="flex flex-col items-center h-screen w-full mt-20">
    <div
      class="
        relative
        flex
        w-full
        h-40v
        justify-center
        items-center
        bg-indigo-100 bg-cover bg-center
      "
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/bgProjects/' + proj[0].imgBgColor + '.jpg') +
          ')',
      }"
    >
      <img
        :src="require(`@/assets/imgProjects/${proj[0].imgFirst}`)"
        class="h-full z-10 py-10"
      />
    </div>
    <h1>{{ proj[0].name }}</h1>
    <p>{{ proj[0].description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  async asyncData({ params, $axios }) {
    const proj = await $axios.$get(
      `http://localhost:3004/projects/?slug=${params.slug}`
    )
    return { proj }
  },
}
</script>

<style></style>
