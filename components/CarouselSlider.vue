<template>
  <div
    class="
      overflow-y-hidden
      relative
      flex
      justify-center
      items-center
      h-screen
      w-full
      bg-offwhite
    "
  >
    <VueSlickCarousel v-bind="settings" class="flex w-full h-screen">
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
            pb-16
            tablet:-mt-0
            -mt-9
          "
        >
          <!-- COLONNE DE GAUCHE -->
          <div
            class="
              flex flex-col
              tablet:w-3/5
              w-90%
              justify-center
              tablet:items-end
              items-center
            "
          >
            <!-- CATEGORIE -->
            <div
              class="
                tablet:flex
                hidden
                w-max
                uppercase
                py-4
                px-8
                shadowBlue
                tablet:ml-32
                ml-0
                mb-0.5
                bg-offwhite
              "
            >
              {{ post.categorie }}
            </div>
            <!-- NOM -->
            <h3
              class="
                flex-wrap
                w-auto
                tablet:py-8
                py-4
                tablet:px-10
                px-5
                font-fontTitle
                uppercase
                shadowBlue
                textTitleProj
                text-blue
                bg-offwhite
              "
            >
              {{ post.name }}
            </h3>
            <!-- DESCRIPTION -->
            <div
              class="
                tablet:w-full
                w-90%
                p-5
                px-7
                shadowBlue
                textParagraph
                mt-0.5
                tablet:ml-0.5
                ml-0
              "
            >
              <p>{{ post.description }}</p>
            </div>
          </div>

          <!-- COLONNE DE DROITE -->
          <div
            class="
              tablet:flex
              hidden
              flex-col
              w-20%
              justify-center
              items-start
              text-left
              ml-0.5
            "
          >
            <div class="flex w-full px-6 py-4 shadowBlue mt-0.5">
              <p><b class="text-blue">Poste :</b> {{ post.poste }}</p>
            </div>
            <div class="flex w-full px-6 py-4 shadowBlue mt-0.5">
              <p><b class="text-blue">Techno :</b> {{ post.techno }}</p>
            </div>
            <div class="flex w-full px-6 py-4 shadowBlue mt-0.5">
              <p><b class="text-blue">Font :</b> {{ post.font }}</p>
            </div>
            <div
              v-if="post.site"
              class="flex w-full px-6 py-4 shadowBlue mt-0.5"
            >
              <p>
                <b class="text-blue">Site : </b>
                <a :href="post.site" target="_blank" class="hoverWeb"
                  >Aperçu <span class="text-blue font-semibold">→</span></a
                >
              </p>
            </div>
          </div>
        </div>

        <!-- BOUTON -->
        <button
          class="
            absolute
            tablet:bottom-120
            bottom-120
            z-50
            py-4
            px-12
            bg-blue
            border-white border-opacity-0 border-4
            text-white
            hover:cursor-pointer
            font-bold
            uppercase
            hover:border-blue hover:border-4 hover:text-blue hover:bg-white
            btnBottom
          "
        >
          <nuxt-link :to="post.slug"> voir le projet</nuxt-link>
        </button>
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
        arrows: true,
        dots: true,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.position {
  display: flex !important;
  flex-direction: row !important;
}
.shadowBlue {
  box-shadow: 0px 0px 0px 2px #002fc7 !important;
}
.hoverWeb {
  font-style: italic;
  z-index: 6000;
}
.hoverWeb:hover {
  z-index: 6000;
  cursor: pointer !important;
  color: #002fc7 !important;
  font-weight: 700 !important;
  font-style: normal !important;
}
.textTitleProj {
  font-size: 42px;
  font-weight: 700;
  line-height: 48px;
  text-align: right;
}
.textParagraph {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: justify;
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
  .textParagraph {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-align: justify;
  }
}
</style>
