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
      <p class="tablet:w-3/5 w-70% mt-10 text-desktop-paragraph">
        {{ about.header.description }}
      </p>
      <div class="flex tablet:flex-row flex-col tablet:mt-36 mt-10">
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

    <div class="flex flex-col items-center">
      <div class="flex flex-row mt-10 mb-36 justify-center w-80%">
        <div
          v-for="(value, index) in about.bring.values"
          :key="index"
          class="flex flex-col items-center justify-center"
        >
          <!-- LEFT CONTAINER -->
          <div
            class="
              flex flex-col
              text-center
              border-r-0 border-b-2 border-solid border-blue
              justify-center
              items-center
              my-10
              p-5
              tablet:w-4/5
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
            <div class="font-fontTitle tablet:text-3xl text-2xl text-blue py-2">
              {{ value.title }}
            </div>
          </div>

          <!-- RIGHT CONTAINER -->
          <div
            class="
              tablet:px-8 tablet:py-0
              py-1
              px-2
              text-left
              w-90%
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

    <div class="flex flex-col w-full h-50v mb-20 justify-center items-center">
      <h2 class="tablet:w-3/5 w-70% font-fontTitle text-blue text-header-h2">
        {{ about.footer.title }}
      </h2>
      <div class="mt-10 w-52 border-t-2 border-solid border-blue"></div>
      <div class="flex tablet:flex-row flex-col items-center mt-8">
        <button class="cta-footer mr-4">
          {{ about.footer.coffee }}
        </button>
        <button class="cta-footer ml-4">
          {{ about.footer.cv }}
        </button>
      </div>
    </div>
    <div class="bg-blue w-full h-10v flex justify-end items-start">
      <img src="../assets/icons/hand-peace-blue.png" class="hello" />
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
.cta-footer {
  @apply text-blue px-16 py-4 bg-offwhite border-2 border-solid border-blue text-center cursor-pointer;
  -webkit-box-shadow: 8px 8px 0 0 #0123ff;
  -moz-box-shadow: 8px 8px 0 0 #0123ff;
  box-shadow: 8px 8px 0 0 #0123ff;
  transition: all 0.3s ease-in-out;
  transition-delay: 0.3s;
  text-decoration: none;

  &:hover {
    -webkit-box-shadow: 0 0 0 8px #0123ff;
    -moz-box-shadow: 0 0 0 8px #0123ff;
    box-shadow: 0 0 0 8px #0123ff;
    animation: shake 0.3s;
    animation-iteration-count: initial;
  }
}
.hello {
  @apply opacity-100 relative z-30 mr-10;
  width: 60px;
  top: -70px;
  transform: rotate(15deg);
  &:hover {
    transform: rotate(15deg);
    animation: shake 0.3s;
    animation-iteration-count: initial;
  }
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
