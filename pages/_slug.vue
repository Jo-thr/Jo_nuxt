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
    <!-- RETURN -->
    <nuxt-link
      to="/projects"
      class="
        close
        border-blue border-solid border-6
        px-3
        py-1
        bg-white
        m-auto
        text-blue
        font-xl
      "
    >
      ✖
    </nuxt-link>

    <!-- HEADER ROND -->
    <div class="w-80% flex justify-between items-center mt-20">
      <div class="flex flex-col py-10 px-5">
        <h1 class="text-6xl font-bold" :style="{ color: dossier.color }">
          {{ dossier.name }}
        </h1>

        <p class="py-8">
          {{ dossier.techno }}
        </p>
        <p
          class="w-90p border-l-2 border-solid pl-5 mt-5 mb-11"
          :style="{ borderColor: dossier.color }"
        >
          {{ dossier.description }}
        </p>

        <a :href="dossier.site" target="_blank">
          <div v-if="dossier.site" class="flex items-center flex-row">
            <div
              class="flex items-center justify-center goToSite mr-3 text-xl"
              :style="{ backgroundColor: dossier.color }"
            >
              ↬
            </div>
            <div class="flex italic" :style="{ color: dossier.color }">
              Aller sur {{ dossier.name }}
            </div>
          </div></a
        >
      </div>
      <div
        class="flex items-center bg-blue circle mb-10 ml-5"
        :style="{ backgroundColor: dossier.color }"
      >
        <img
          :src="require(`@/assets/imgProjects/${dossier.imgFirst}`)"
          class="relative z-10"
        />
      </div>
    </div>
    <!-- IMAGES PROJET -->
    <div v-if="dossier.projet" class="w-full">
      <!-- 0 -->
      <div class="w-75% text-left m-auto">
        <p
          v-if="dossier.projet.title_0"
          class="
            relative
            titlePage
            mt-3
            text-4xl
            z-30
            border-b-2 border-solid border-blue
            pb-2
          "
        >
          {{ dossier.projet.title_0 }}
        </p>
      </div>
      <img
        v-if="dossier.projet.img_0 != null"
        :src="
          require('@/assets/projects/' +
            dossier.slug +
            '/' +
            dossier.projet.img_0)
        "
        class="w-full"
      />
      <!-- 1 -->
      <div class="w-75% text-left m-auto">
        <p
          v-if="dossier.projet.title_1"
          class="
            relative
            titlePage
            mt-3
            text-4xl
            z-30
            border-b-2 border-solid border-blue
            pb-2
          "
        >
          {{ dossier.projet.title_1 }}
        </p>
      </div>
      <img
        v-if="dossier.projet.img_1"
        :src="
          require('@/assets/projects/' +
            dossier.slug +
            '/' +
            dossier.projet.img_1)
        "
        class="w-full"
      />

      <!-- 2 -->
      <div class="w-75% text-left m-auto">
        <p
          v-if="dossier.projet.title_2"
          class="
            relative
            titlePage
            mt-3
            text-4xl
            z-30
            border-b-2 border-solid border-blue
            pb-2
          "
        >
          {{ dossier.projet.title_2 }}
        </p>
      </div>
      <img
        v-if="dossier.projet.img_2"
        :src="
          require('@/assets/projects/' +
            dossier.slug +
            '/' +
            dossier.projet.img_2)
        "
        class="w-full"
      />

      <!-- 3 -->
      <div class="w-75% text-left m-auto">
        <p
          v-if="dossier.projet.title_3"
          class="
            relative
            titlePage
            mt-3
            text-4xl
            z-30
            border-b-2 border-solid border-blue
            pb-2
          "
        >
          {{ dossier.projet.title_3 }}
        </p>
      </div>
      <img
        v-if="dossier.projet.img_3"
        :src="
          require('@/assets/projects/' +
            dossier.slug +
            '/' +
            dossier.projet.img_3)
        "
        class="w-full"
      />

      <!-- 4 -->
      <div class="w-75% text-left m-auto">
        <p
          v-if="dossier.projet.title_4"
          class="
            relative
            titlePage
            mt-3
            text-4xl
            z-30
            border-b-2 border-solid border-blue
            pb-2
          "
        >
          {{ dossier.projet.title_4 }}
        </p>
      </div>
      <img
        v-if="dossier.projet.img_4"
        :src="
          require('@/assets/projects/' +
            dossier.slug +
            '/' +
            dossier.projet.img_4)
        "
        class="w-full"
      />

      <!-- 5 -->
      <div class="w-75% text-left m-auto">
        <p
          v-if="dossier.projet.title_5"
          class="
            relative
            titlePage
            mt-3
            text-4xl
            z-30
            border-b-2 border-solid border-blue
            pb-2
          "
        >
          {{ dossier.projet.title_5 }}
        </p>
      </div>
      <img
        v-if="dossier.projet.img_5"
        :src="
          require('@/assets/projects/' +
            dossier.slug +
            '/' +
            dossier.projet.img_5)
        "
        class="w-full"
      />

      <!-- 6 -->
      <div class="w-75% text-left m-auto">
        <p
          v-if="dossier.projet.title_6"
          class="
            relative
            titlePage
            mt-3
            text-4xl
            z-30
            border-b-2 border-solid border-blue
            pb-2
          "
        >
          {{ dossier.projet.title_6 }}
        </p>
      </div>
      <img
        v-if="dossier.projet.img_6"
        :src="
          require('@/assets/projects/' +
            dossier.slug +
            '/' +
            dossier.projet.img_6)
        "
        class="w-full"
      />

      <!-- 7 -->
      <div class="w-75% text-left m-auto">
        <p
          v-if="dossier.projet.title_7"
          class="
            relative
            titlePage
            mt-3
            text-4xl
            z-30
            border-b-2 border-solid border-blue
            pb-2
          "
        >
          {{ dossier.projet.title_7 }}
        </p>
      </div>
      <img
        v-if="dossier.projet.img_7"
        :src="
          require('@/assets/projects/' +
            dossier.slug +
            '/' +
            dossier.projet.img_7)
        "
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
import data from '@/datas/data.json'

export default {
  name: 'Slug',
  layout: 'page',
  asyncData({ params }) {
    return {
      slug: params.slug,
    }
  },

  data() {
    return {
      proj: data.projects,
      dossier: null,
    }
  },
  watch: {
    slug: {
      immediate: true,
      handler(slug) {
        if (slug) {
          this.dossier = this.proj.find((f) => {
            return f.slug === this.slug
          })
        }
      },
    },
  },

  /* async asyncData({ params, $axios }) {
    const proj = await $axios.$get(
      `http://localhost:3004/projects/?slug=${params.slug}` 
    )
    return { proj }
  }, */
}
</script>

<style lang="scss" scoped>
.header {
  height: 70vh;
  min-height: 70vh;
}
.intro {
  height: max-content;
  width: 30%;
  margin-left: 220px;
  margin-top: 160px;
}

.close {
  position: fixed;
  bottom: 62px;
  right: 62px;
  width: max-content;
  z-index: 500;
}
.close:hover {
  animation: shake 0.3s;
  animation-iteration-count: initial;
}
.circle {
  min-width: 700px;
  min-height: 70vh;
  border-radius: 0 0 350px 350px;
}
.goToSite {
  min-width: 30px;
  min-height: 30px;
  color: #fff;
  content: '↬';
}
.titlePage {
  color: #fcfcfc;
  text-shadow: -0.6px 0 #002fc7, 0 0.6px #002fc7, 0.6px 0 #002fc7,
    0 -0.6px #002fc7;
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
