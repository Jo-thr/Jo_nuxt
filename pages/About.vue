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
          tablet:w-full
          w-80%
          bg-header-about
          tablet:mt-52
          mt-28
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
          tablet:w-3/4
          w-full
          tablet:pt-12
          pt-8
          -mt-16
          font-fontTitle
          tablet:text-header-h2
          text-mobile-h2
          uppercase
          font-bold
          text-blue
        "
      >
        <p class="text-xs">à propos</p>
        {{ about.header.title }}
      </div>
      <div class="mt-10 w-52 border-t-2 border-solid border-blue"></div>
      <p class="tablet:w-80 w-70% mt-10 text-desktop-paragraph">
        {{ about.header.description }}
      </p>
      <div class="flex tablet:flex-row flex-col tablet:my-16 my-10">
        <div
          v-for="(spe, index) in about.header.specialities"
          :key="index"
          class="
            flex flex-col
            justify-center
            items-center
            px-8
            tablet:my-0
            my-3
          "
        >
          <div
            class="h-2 w-28 bg-center bg-cover bg-no-repeat"
            :style="{
              backgroundImage:
                'url(' + require('../assets/images/bar.png') + ')',
            }"
          ></div>
          <p class="tablet:mt-2 mt-1 text-blue italic">{{ spe.name }}</p>
        </div>
      </div>
    </div>

    <!-- BRING SECTION -->

    <div class="container flex flex-col items-center">
      <p class="tablet:w-80 w-70% mt-14 text-desktop-paragraph">
        {{ about.bring.intro }}
      </p>
      <div class="mt-10 mb-14">
        <div
          v-for="(value, index) in about.bring.values"
          :key="index"
          class="flex tablet:flex-row flex-col items-center justify-center"
        >
          <!-- LEFT CONTAINER -->
          <div
            class="
              flex flex-col
              tablet:text-right
              text-center
              tablet:border-r-2 tablet:border-b-0
              border-r-0 border-b-2 border-solid border-blue
              justify-end
              tablet:items-end
              items-center
              my-10
              p-5
              tablet:w-40
              w-70%
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
            <div
              class="
                font-fontTitle
                tablet:text-3xl
                text-2xl text-blue
                uppercase
                font-bold
              "
            >
              {{ value.title }}
            </div>
          </div>

          <!-- RIGHT CONTAINER -->
          <div
            class="
              tablet:p-5
              p-2
              text-left
              tablet:w-1/3
              w-70%
              text-desktop-paragraph
            "
          >
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
    <div class="my-14 tablet:w-96 w-70% text-desktop-paragraph">
      {{ about.skills.intro }}
    </div>
    <div
      class="
        flex flex-wrap
        items-center
        justify-center
        tablet:w-1/2
        w-90%
        mx-auto
      "
    >
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

    <div class="my-14 tablet:w-96 w-70% text-desktop-paragraph">
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
      <p class="tablet:w-96 w-70% text-desktop-paragraph">
        {{ about.footer.title }}
      </p>
      <div class="flex tablet:flex-row flex-col items-center w-35% mt-8">
        <div class="w-60 mx-2 py-2 px-4 bg-offwhite text-blue tablet:mb-0 mb-4">
          {{ about.footer.coffee }}
        </div>
        <div class="w-60 mx-2 py-2 px-4 bg-offwhite text-blue">
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
