<template>
  <div class="flex flex-col items-center justify-center h-screen w-full">
    <h1>Hello {{ proj[0].name }}</h1>
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
