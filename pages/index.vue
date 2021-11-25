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
      <h1 class="text-white font-size">JO•THR</h1>
      <h3
        class="md:flex hidden text-offwhite uppercase spacing tracking-widest"
      >
        - A front-end developper & ui designer -
      </h3>
      <img src="../assets/icons/hand-peace-white.png" class="hello" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'page',
}
</script>

<style>
.hello {
  opacity: 0;
  position: absolute;
  width: 60px;
  z-index: 30;
  margin-left: 40%;
  margin-bottom: 22vh;
  transition: all 200ms ease-in-out;
}

.font-size {
  font-size: 192px;
  font-style: normal;
  font-weight: 700;
  line-height: 192px;
  text-align: center;
}

#shake:hover > .hello {
  opacity: 1 !important;
  transform: rotate(15deg);
}

@media (max-width: 767px) {
  .font-size {
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: 85px;
    text-align: center;
  }
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
