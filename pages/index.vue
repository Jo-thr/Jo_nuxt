<template>
  <div
    class="
      relative
      flex flex-col
      justify-center
      items-center
      h-screen
      w-full
      bg-blue
    "
  >
    <div
      id="shake"
      class="relative flex flex-col justify-center items-center w-full"
    >
      <h1
        class="
          alignFont
          font-fontTitle font-bold
          text-center text-white
          tablet:text-header-h1
          text-mobile-h1
        "
      >
        JO•THR
      </h1>
      <h3
        class="
          tablet:flex
          hidden
          text-offwhite
          uppercase
          spacing
          tracking-widest
        "
      >
        - A front-end developper & ui designer -
      </h3>
      <img
        src="../assets/icons/hand-peace-white.png"
        class="hello hover:animate-wizz"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'page',
  head() {
    return {
      title: 'Hello Jonathan Thr',
    }
  },
}
</script>

<style lang="scss" scoped>
.hello {
  @apply opacity-0 absolute z-30;
  width: 60px;
  margin-left: 40%;
  margin-bottom: 22vh;
  transition: all 200ms ease-in-out;
}

.alignFont {
  writing-mode: vertical-rl;
  text-orientation: upright;

  @screen tablet {
    writing-mode: horizontal-tb;
  }
}

#shake:hover > .hello {
  opacity: 1 !important;
  transform: rotate(15deg);
}
</style>
