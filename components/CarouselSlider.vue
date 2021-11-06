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
    <carousel class="slider w-full h-screen" :items-to-show="1">
      <slide
        v-for="post in posts"
        :key="post.id"
        class="flex slide-h justify-center items-center w-full"
      >
        <!-- IMAGE & BACKGROUND -->
        <div
          class="
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

        <div
          class="
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
                <a
                  :href="post.site"
                  target="_blank"
                  class="
                    italic
                    hover:text-blue hover:font-semibold hover:not-italic
                  "
                  >Aperçu <span class="text-blue font-semibold">→</span></a
                >
              </p>
            </div>
          </div>
        </div>
        <button
          class="
            absolute
            z-50
            py-4
            px-12
            bg-blue
            border-white border-opacity-0 border-4
            text-white
            font-bold
            uppercase
            hover:border-blue hover:border-4 hover:text-blue hover:bg-white
            btnBottom
          "
        >
          <nuxt-link
            :to="
              localePath({
                name: 'slug',
                params: { slug: post.name },
              })
            "
          >
            voir le projet</nuxt-link
          >
        </button>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import datas from '../datas/data.json'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'CarouselSlider',
  data() {
    return {
      posts: datas.projects,
    }
  },
}
</script>

<style>
.btnBottom {
  bottom: 15vh;
}
.shadowBlue {
  box-shadow: 0px 0px 0px 2px #002fc7;
}
</style>
