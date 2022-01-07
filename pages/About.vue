<template>
  <div
    class="
      relative
      flex flex-col
      items-center
      w-full
      bg-offwhite
      font-paragraph
      text-center
    "
  >
    <!-- HEADER SECTION -->
    <div class="container flex flex-col items-center">
      <div class="bg-blue w-full bg-header-about mt-40"></div>
      <div
        class="
          bg-offwhite
          w-70%
          pt-12
          -mt-14
          font-fontTitle
          text-header-h2
          uppercase
          font-bold
          text-blue
        "
      >
        {{ about.header.title }}
      </div>
      <div class="mt-10 w-52 border-t-2 border-solid border-blue"></div>
      <p class="w-70% mt-10 text-desktop-paragraph">
        {{ about.header.description }}
      </p>
      <div class="flex flex-row my-16">
        <div
          v-for="(spe, index) in about.header.specialities"
          :key="index"
          class="flex flex-col justify-center items-center px-4"
        >
          <div class="h-2 w-40 bg-blue"></div>
          <p class="mt-2 text-blue italic">{{ spe.name }}</p>
        </div>
      </div>
    </div>

    <!-- BRING SECTION -->
    <div class="bg-blue w-full h-60v mt-2"></div>
    <div class="container flex flex-col items-center">
      <p class="w-70% mt-14 text-desktop-paragraph">
        {{ about.bring.intro }}
      </p>
      <div class="mt-10 mb-14">
        <div
          v-for="(value, index) in about.bring.values"
          :key="index"
          class="flex flex-row items-center justify-center"
        >
          <!-- LEFT CONTAINER -->
          <div
            class="
              flex flex-col
              text-right
              border-r-2 border-solid border-blue
              justify-end
              items-end
              my-10
              p-5
              w-40
            "
          >
            <div
              class="
                flex
                bg-blue
                mb-2
                w-10
                h-10
                text-white
                items-center
                justify-center
              "
            >
              {{ value.id }}
            </div>
            {{ value.title }}
          </div>

          <!-- RIGHT CONTAINER -->
          <div class="p-5 text-left w-30%">
            {{ value.description }}
          </div>
        </div>
      </div>
    </div>

    <!-- SKILLS SECTION -->
    <div class="bg-blue w-full h-80 mt-2"></div>
    <div class="mt-14 mb-40 w-40%">{{ about.skills.intro }}</div>
  </div>
</template>

<script>
import datas from '@/datas/data.json'
export default {
  name: 'About',
  layout: 'page',
  data() {
    return {
      about: datas.about,
    }
  },
  head() {
    return {
      title: 'À propos | Jonathan Thr',
    }
  },
}
</script>

<style lang="scss" scoped>
.bg-header-about {
  height: 350px;
}
</style>
