<template>
  <div
    class="
      h-screen
      w-full
      flex flex-col
      justify-center
      items-center
      text-blue text-center
    "
  >
    <h1 v-if="error.statusCode === 404" class="mb-10">LOOSER !!! Erreur 404</h1>
    <div v-else>
      <img class="max-w-3xl h-auto" src="@/assets/images/dog.png" />
      <h1 class="text-blue text-8xl font-fontTitle mt-20 mb-4 font-bold">
        Oh non !
      </h1>
      <p class="text-black font-paragraph mb-20">
        Quelque chose ne vas pas, Foxy cherche la solution
      </p>
    </div>
    <NuxtLink
      to="/"
      class="
        py-4
        px-12
        max-w-max
        bg-blue
        border-white border-opacity-0 border-4
        text-white
        font-bold
        tracking-wider
        uppercase
        hover:border-blue hover:border-4 hover:text-blue hover:bg-white
      "
    >
      Retourner sur le site</NuxtLink
    >
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: 'Oh non ! Help Jonathan Thr',
    }
  },
}
</script>

<style scoped src="@/assets/css/index.css"></style>
