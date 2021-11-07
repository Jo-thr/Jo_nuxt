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
    <VueSlickCarousel v-bind="settings" class="flex w-full h-screen">
      <div
        v-for="post in posts"
        :key="post.id"
        class="position justify-center items-center w-full"
      >
        <!-- BOUTON -->
        <button
          class="
            absolute
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
          voir le projet
        </button>

        <!-- IMAGE & BACKGROUND -->
        <div
          class="
            relative
            flex
            w-50p
            h-screen
            justify-center
            items-center
            bg-indigo-100 bg-cover bg-center
          "
          :style="{
            backgroundImage:
              'url(' +
              require('../assets/bgProjects/' + post.imgBgColor + '.jpg') +
              ')',
          }"
        >
          <img
            :src="require(`../assets/imgProjects/${post.imgFirst}`)"
            class="w-80p z-10 pb-12"
          />
        </div>

        <!-- INFOS -->
        <div
          class="
            relative
            flex flex-row
            w-50p
            flex-nowrap
            justify-center
            items-center
            pb-16
          "
        >
          <!-- COLONNE DE GAUCHE -->
          <div class="flex flex-col w-60p justify-center items-end">
            <!-- CATEGORIE -->
            <div class="w-max uppercase py-4 px-8 shadowBlue ml-32 mb-0.5">
              {{ post.categorie }}
            </div>
            <!-- NOM -->
            <h1
              class="
                flex-wrap
                w-auto
                text-right
                py-8
                px-12
                shadowBlue
                text-blue
              "
            >
              {{ post.name }}
            </h1>
            <!-- DESCRIPTION -->
            <div class="w-full p-5 px-7 shadowBlue text-justify mt-0.5 ml-0.5">
              <p>{{ post.description }}</p>
            </div>
          </div>

          <!-- COLONNE DE DROITE -->
          <div
            class="
              flex flex-col
              w-20p
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

<style>
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
</style>
