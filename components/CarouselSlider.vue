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
    "
  >
    <VueSlickCarousel
      v-bind="settings"
      ref="carousel"
      class="flex w-full h-screen"
    >
      <div
        v-for="post in posts"
        :key="post.id"
        class="flex position justify-center items-center w-full"
      >
        <!-- IMAGE & BACKGROUND -->
        <div
          class="
            relative
            flex flex-col
            tablet:w-1/2
            w-full
            tablet:h-screen
            h-90v
            tablet:mt-0
            mt-10
            justify-center
            items-center
            bg-cover bg-center
          "
          :style="{
            backgroundImage:
              'url(' +
              require('../assets/bgProjects/' + post.imgBgColor + '.jpg') +
              ')',
          }"
        >
          <!-- NOM RESPONSIVE-->
          <h3
            class="
              tablet:hidden
              relative
              z-20
              w-80%
              mb-10
              uppercase
              text-center
              font-fontTitle
              text-mobile-h2
              font-bold
              text-offwhite
            "
          >
            {{ post.name }}
          </h3>
          <img
            :src="require(`../assets/imgProjects/${post.imgFirst}`)"
            class="relative w-80% z-10 tablet:pb-12 pb-20"
          />
        </div>

        <!-- INFOS -->
        <div
          class="
            tablet:flex
            relative
            hidden
            flex-row
            tablet:w-1/2
            w-full
            flex-nowrap
            justify-center
            items-center
          "
        >
          <div
            class="
              flex flex-col
              justify-center
              items-start
              ml-14
              mr-14
              px-14
              border-l-4
              w-full
              h-96
              text-blue
            "
          >
            <div class="flex flex-row">
              <button @click="showPrev">
                <img
                  class="mr-4 hover:scale-90 transition ease-in-out delay-100"
                  src="@/assets/icons/prev.svg"
                />
              </button>
              <button @click="showNext">
                <img src="@/assets/icons/next.svg" />
              </button>
            </div>
            <p class="flex uppercase pt-8 text-sm">{{ post.categorie }}</p>
            <h3
              class="
                w-auto
                tablet:py-8
                py-4
                tablet:px-10
                px-5
                my-5
                font-fontTitle
                uppercase
                textTitleProj
                bg-offwhite
                border-2 border-solid
              "
            >
              {{ post.name }}
            </h3>
            <p class="text-sm" v-html="post.short_description" />
            <button
              class="
                relative
                mt-6
                mr-10
                z-50
                py-4
                px-12
                bg-blue
                border-white border-opacity-0 border-2
                text-white
                hover:cursor-pointer
                font-bold
                uppercase
                hover:border-blue hover:border-2 hover:text-blue hover:bg-white
                btnBottom
              "
            >
              <nuxt-link :to="post.slug"> voir le projet</nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import '@/assets/css/slides.css'
import datas from '@/datas/data.json'

export default {
  name: 'CarouselSlider',
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      posts: datas.projects,
      settings: {
        arrows: false,
        dots: true,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
  methods: {
    showPrev() {
      this.$refs.carousel.prev()
    },
    showNext() {
      this.$refs.carousel.next()
    },
  },
}
</script>

<style lang="scss" scoped>
.position {
  display: flex !important;
  flex-direction: row !important;
}
.textTitleProj {
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  text-align: left;
}
@media (max-width: 767px) {
  .position {
    display: flex !important;
    flex-direction: column !important;
  }
  .textTitleProj {
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
  }
}
</style>
