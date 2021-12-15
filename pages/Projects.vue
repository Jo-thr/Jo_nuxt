<template>
  <div
    class="
      relative
      flex
      justify-center
      items-center
      h-screen
      w-full
      bg-offwhite
      font-paragraph
    "
  >
    <CarouselSlider />
  </div>
</template>

<script>
import CarouselSlider from '../components/CarouselSlider.vue'
export default {
  name: 'Projects',
  components: { CarouselSlider },
  layout: 'page',
  head() {
    return {
      title: 'Projets | Jonathan Thr',
    }
  },
}
</script>

<style></style>
