<template>
  <div
    class="
      flex flex-col
      items-center
      h-screen
      w-full
      bg-offwhite
      overflow-y-scroll
      pb-20
      font-paragraph
    "
  >
    <!-- RETURN -->
    <nuxt-link
      to="/projects"
      class="
        close
        hover:animate-wizz
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
    <div
      id="top"
      class="w-80% tablet:flex hidden justify-between items-center mt-20"
    >
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

    <!-- HEADER RESPONSIVE -->
    <div class="w-full tablet:hidden flex flex-col justify-center items-center">
      <div
        class="flex items-center bg-blue circle mb-10"
        :style="{ backgroundColor: dossier.color }"
      >
        <img
          :src="require(`@/assets/imgProjects/${dossier.imgFirst}`)"
          class="w-90% relative z-10 mt-32 mx-auto"
        />
      </div>

      <div class="w-full flex flex-col pb-10 px-5">
        <h1
          class="text-4xl font-bold break-words"
          :style="{ color: dossier.color }"
        >
          {{ dossier.name }}
        </h1>

        <p class="py-8 mobile:text-sm">
          {{ dossier.techno }}
        </p>
        <p
          class="w-90p border-l-2 border-solid pl-5 mt-5 mb-11 mobile:text-sm"
          :style="{ borderColor: dossier.color }"
        >
          {{ dossier.description }}
        </p>

        <a :href="dossier.site" target="_blank" class="hover:animate-wizz">
          <div v-if="dossier.site" class="flex items-center flex-row">
            <div
              class="flex items-center justify-center goToSite mr-3 text-xl"
              :style="{ backgroundColor: dossier.color }"
            >
              ↬
            </div>
            <div
              class="flex italic mobile:text-sm"
              :style="{ color: dossier.color }"
            >
              Aller sur {{ dossier.name }}
            </div>
          </div></a
        >
      </div>
    </div>

    <!-- IMAGES PROJET -->
    <div
      v-if="dossier.projet"
      id="gallery"
      class="w-full flex flex-col items-center"
    >
      <img
        class="w-8 mb-40"
        src="@/assets/icons/bottom.png"
        @click="scrollIntoView()"
      />
      <!-- MISSION -->
      <div v-if="dossier.mission" class="w-78% text-left m-auto">
        <p
          class="
            relative
            tablet:mt-3
            mt-12
            tablet:text-2xl
            text-xl
            font-bold
            italic
            z-30
            border-b-2 border-solid
            pb-2
          "
          :style="{ color: dossier.color, borderColor: dossier.color }"
        >
          Ma mission
        </p>
        <p class="pt-6 mb-40 font-paragraph leading-7 mobile:text-sm">
          {{ dossier.mission }}
        </p>
      </div>

      <!-- 0 -->
      <div class="w-78% text-left m-auto">
        <p
          v-if="dossier.projet.title_0"
          class="
            relative
            tablet:mt-3
            mt-12
            tablet:text-2xl
            text-xl
            font-bold
            italic
            z-30
            border-b-2 border-solid
            pb-2
          "
          :style="{ color: dossier.color, borderColor: dossier.color }"
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
      <div class="w-78% text-left m-auto">
        <p
          v-if="dossier.projet.title_1"
          class="
            relative
            tablet:mt-3
            mt-12
            tablet:text-2xl
            text-xl
            font-bold
            italic
            z-30
            border-b-2 border-solid
            pb-2
          "
          :style="{ color: dossier.color, borderColor: dossier.color }"
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
      <div class="w-78% text-left m-auto">
        <p
          v-if="dossier.projet.title_2"
          class="
            relative
            tablet:mt-3
            mt-8
            tablet:text-2xl
            text-xl
            font-bold
            italic
            z-30
            border-b-2 border-solid
            pb-2
          "
          :style="{ color: dossier.color, borderColor: dossier.color }"
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
      <div class="w-78% text-left m-auto">
        <p
          v-if="dossier.projet.title_3"
          class="
            relative
            tablet:mt-3
            mt-12
            tablet:text-2xl
            text-xl
            font-bold
            italic
            z-30
            border-b-2 border-solid
            pb-2
          "
          :style="{ color: dossier.color, borderColor: dossier.color }"
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
      <div class="w-78% text-left m-auto">
        <p
          v-if="dossier.projet.title_4"
          class="
            relative
            tablet:mt-3
            mt-12
            tablet:text-2xl
            text-xl
            font-bold
            italic
            z-30
            border-b-2 border-solid
            pb-2
          "
          :style="{ color: dossier.color, borderColor: dossier.color }"
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
      <div class="w-78% text-left m-auto">
        <p
          v-if="dossier.projet.title_5"
          class="
            relative
            tablet:mt-3
            mt-12
            tablet:text-2xl
            text-xl
            font-bold
            italic
            z-30
            border-b-2 border-solid
            pb-2
          "
          :style="{ color: dossier.color, borderColor: dossier.color }"
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
      <div class="w-78% text-left m-auto">
        <p
          v-if="dossier.projet.title_6"
          class="
            relative
            tablet:mt-3
            mt-12
            tablet:text-2xl
            text-xl
            font-bold
            italic
            z-30
            border-b-2 border-solid
            pb-2
          "
          :style="{ color: dossier.color, borderColor: dossier.color }"
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
      <div class="w-78% text-left m-auto">
        <p
          v-if="dossier.projet.title_7"
          class="
            relative
            tablet:mt-3
            mt-12
            tablet:text-2xl
            text-xl
            font-bold
            italic
            z-30
            border-b-2 border-solid
            pb-2
          "
          :style="{ color: dossier.color, borderColor: dossier.color }"
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

  head() {
    return {
      title: this.dossier.name + ' | Jonathan Thr',
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
  methods: {
    scrollIntoView() {
      const el = document.getElementById('gallery')
      el.scrollIntoView({ behavior: 'smooth' })
    },
  },
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
  @apply fixed bottom-5 right-20 w-max;
  z-index: 500;
  @screen tablet {
    @apply fixed  w-max;
    bottom: 62px;
    right: 62px;
    z-index: 500;
  }
}
.circle {
  @apply min-w-full;
  min-height: 50vh;
  border-radius: 0 0 350px 350px;
  @screen tablet {
    min-width: 700px;
    min-height: 70vh;
    border-radius: 0 0 350px 350px;
  }
}
.goToSite {
  @apply text-offwhite;
  min-width: 30px;
  min-height: 30px;
  content: '↬';
}
</style>
