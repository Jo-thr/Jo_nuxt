<template>
  <div
    class="
      flex flex-col
      items-center
      h-screen
      w-full
      bg-offwhite
      overflow-y-scroll
    "
  >
    <!-- HEADER -->
    <div
      class="
        relative
        mt-20
        flex
        w-full
        header
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
        class="h-full z-10 py-20 mb-12"
      />
    </div>
    <h1
      class="
        px-12
        py-8
        bg-offwhite
        -mt-14
        z-50
        text-6xl
        tracking-wider
        text-blue
      "
    >
      {{ proj[0].name }}
    </h1>
    <p>
      {{ proj[0].poste }} <span class="text-blue px-3">⁃</span>
      {{ proj[0].techno }}
    </p>
    <p v-if="proj[0].site" class="py-3 text-blue">
      <span class="font-semibold pr-2">→</span>{{ proj[0].site }}
    </p>
    <p class="py-28 max-w-screen-md">{{ proj[0].description }}</p>

    <!-- IMAGES PROJET -->
    <div class="text-center w-full">
      <!-- 0 -->
      <div v-if="proj[0].projet.title_0">
        <p class="relative titlePage mt-3 px-3 text-4xl z-30 italic">
          {{ proj[0].projet.title_0 }}
        </p>
        <div class="bg-blue bgTitle z-10"></div>
        <img
          v-if="proj[0].projet.img_0"
          :src="
            require('@/assets/projects/' +
              proj[0].slug +
              '/' +
              proj[0].projet.img_0)
          "
          class="w-full"
        />
      </div>
      <!-- 1 -->
      <div v-if="proj[0].projet.title_1" class="pt-10">
        <p class="relative titlePage mt-3 px-3 text-4xl z-30 italic">
          {{ proj[0].projet.title_1 }}
        </p>
        <div class="bg-blue bgTitle z-10"></div>
        <img
          v-if="proj[0].projet.img_1"
          :src="
            require('@/assets/projects/' +
              proj[0].slug +
              '/' +
              proj[0].projet.img_1)
          "
          class="w-full"
        />
      </div>
      <!-- 2 -->
      <div v-if="proj[0].projet.title_2" class="pt-10">
        <p class="relative titlePage mt-3 px-3 text-4xl z-30 italic">
          {{ proj[0].projet.title_2 }}
        </p>
        <div class="bg-blue bgTitle z-10"></div>

        <img
          :src="
            require('@/assets/projects/' +
              proj[0].slug +
              '/' +
              proj[0].projet.img_2)
          "
          class="w-full"
        />
      </div>
      <!-- 3 -->
      <div v-if="proj[0].projet.title_3" class="pt-10">
        <p class="relative titlePage mt-3 px-3 text-4xl z-30 italic">
          {{ proj[0].projet.title_3 }}
        </p>
        <div class="bg-blue bgTitle z-10"></div>
        <img
          :src="
            require('@/assets/projects/' +
              proj[0].slug +
              '/' +
              proj[0].projet.img_3)
          "
          class="w-full"
        />
      </div>
      <!-- 4 -->
      <div v-if="proj[0].projet.title_4" class="pt-10">
        <p class="relative titlePage mt-3 px-3 text-4xl z-30 italic">
          {{ proj[0].projet.title_4 }}
        </p>
        <div class="bg-blue bgTitle z-10"></div>
        <img
          :src="
            require('@/assets/projects/' +
              proj[0].slug +
              '/' +
              proj[0].projet.img_4)
          "
          class="w-full"
        />
      </div>
      <!-- 5 -->
      <div v-if="proj[0].projet.title_5" class="pt-10">
        <p class="relative titlePage mt-3 px-3 text-4xl z-30 italic">
          {{ proj[0].projet.title_5 }}
        </p>
        <div class="bg-blue bgTitle z-10"></div>
        <img
          :src="
            require('@/assets/projects/' +
              proj[0].slug +
              '/' +
              proj[0].projet.img_5)
          "
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  layout: 'page',
  async asyncData({ params, $axios }) {
    const proj = await $axios.$get(
      `http://localhost:3004/projects/?slug=${params.slug}`
    )
    return { proj }
  },
}
</script>

<style>
.header {
  height: 60vh;
  min-height: 60vh;
}
.titlePage {
  color: #fcfcfc;
  text-shadow: -0.6px 0 #002fc7, 0 0.6px #002fc7, 0.6px 0 #002fc7,
    0 -0.6px #002fc7;
}
.bgTitle {
  position: relative;
  background-color: #002fc7;
  min-height: 4px;
  width: 360px;
  margin: -18px auto 0 auto;
}
</style>
