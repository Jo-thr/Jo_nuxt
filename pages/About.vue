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
      <div
        class="
          bg-blue
          w-full
          bg-header-about
          mt-52
          bg-cover bg-top
          border-blue border-solid border-4
        "
        :style="{
          backgroundImage:
            'url(' +
            require('../assets/images/' + about.header.img + '.jpg') +
            ')',
        }"
      ></div>
      <div
        class="
          bg-offwhite
          w-70%
          pt-12
          -mt-16
          font-fontTitle
          text-header-h2
          uppercase
          font-bold
          text-blue
        "
      >
        <p class="text-xs">à propos</p>
        {{ about.header.title }}
      </div>
      <div class="mt-10 w-52 border-t-2 border-solid border-blue"></div>
      <p class="w-80 mt-10 text-desktop-paragraph">
        {{ about.header.description }}
      </p>
      <div class="flex flex-row my-16">
        <div
          v-for="(spe, index) in about.header.specialities"
          :key="index"
          class="flex flex-col justify-center items-center px-8"
        >
          <div
            class="h-2 w-28 bg-center bg-cover bg-no-repeat"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/bar.png') + ')',
            }"
          ></div>
          <p class="mt-2 text-blue italic">{{ spe.name }}</p>
        </div>
      </div>
    </div>

    <!-- BRING SECTION -->

    <div class="container flex flex-col items-center">
      <p class="w-80 mt-14 text-desktop-paragraph">
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
                bg-contain bg-no-repeat bg-center
                mb-2
                w-12
                h-12
                text-offwhite text-3xl
                font-bold
                items-center
                font-fontTitle
                justify-center
              "
              :style="{
                backgroundImage:
                  'url(' + require('../assets/images/square.png') + ')',
              }"
            >
              <span class="-mr-1 rotate-6 transform">{{ value.id }}</span>
            </div>
            <div class="font-fontTitle text-3xl text-blue uppercase font-bold">
              {{ value.title }}
            </div>
          </div>

          <!-- RIGHT CONTAINER -->
          <div class="p-5 text-left w-30% text-desktop-paragraph">
            {{ value.description }}
          </div>
        </div>
      </div>
    </div>

    <!-- SKILLS SECTION -->
    <div
      class="w-full h-60v mt-2 bg-cover bg-center"
      :style="{
        backgroundImage:
          'url(' +
          require('../assets/images/' + about.bring.img + '.jpg') +
          ')',
      }"
    ></div>
    <div class="my-14 w-96 text-desktop-paragraph">
      {{ about.skills.intro }}
    </div>
    <div class="flex flex-wrap items-center justify-center w-50% mx-auto">
      <div v-for="(spec, index) in about.skills.spec" :key="index">
        <div
          class="
            flex
            items-center
            justify-center
            text-offwhite
            w-20
            h-20
            m-5
            bg-contain bg-center bg-no-repeat
          "
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/square.png') + ')',
          }"
        >
          {{ spec.name }}
        </div>
      </div>
    </div>

    <div class="my-14 w-96 text-desktop-paragraph">
      {{ about.skills.skill }}
    </div>
    <div class="flex flex-wrap mb-40 w-70% items-center justify-center mx-auto">
      <div v-for="(other, index) in about.skills.others" :key="index">
        <div
          class="
            flex
            items-center
            justify-center
            text-offwhite
            w-max
            py-2
            px-4
            mx-5
            my-3
            bg-cover bg-center bg-no-repeat
          "
          :style="{
            backgroundImage:
              'url(' + require('../assets/images/square.png') + ')',
          }"
        >
          {{ other.name }}
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div
      class="
        flex flex-col
        w-full
        h-50v
        mb-20
        bg-cover bg-no-repeat bg-center
        justify-center
        items-center
        text-offwhite text-desktop-paragraph
      "
      :style="{
        backgroundImage:
          'url(' + require('../assets/images/topo-london.jpg') + ')',
      }"
    >
      <p class="w-96">
        {{ about.footer.title }}
      </p>
      <div class="flex flex-row justify-between w-35% mt-8">
        <div class="w-60 py-2 px-4 bg-offwhite text-blue">
          {{ about.footer.coffee }}
        </div>
        <div class="w-60 py-2 px-4 bg-offwhite text-blue">
          {{ about.footer.cv }}
        </div>
      </div>
    </div>
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
  height: 420px;
}
</style>
