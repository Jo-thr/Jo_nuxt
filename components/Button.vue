<template>
  <div>
    <button
      class=" py-4 px-12 bg-blue border-white border-opacity-0 border-4 text-white font-bold uppercase hover:border-blue hover:border-4 hover:text-blue hover:bg-white"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style></style>
