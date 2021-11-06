<template>
  <div
    class="relative flex justify-center items-center h-screen w-full bg-offwhite"
  >
    <CarouselSlider />
  </div>
</template>

<script>
import CarouselSlider from '../components/CarouselSlider.vue';
export default {
  name: 'Projects',
  components: { CarouselSlider },
};
</script>

<style></style>
