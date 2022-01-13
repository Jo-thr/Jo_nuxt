<template>
  <div class="fixed z-50 font-paragraph">
    <div class="fixed tablet:top-60 top-20 tablet:left-60 left-20 indexMargin">
      <router-link to="/">
        <img src="../assets/logo_jothr.png" class="logo" />
      </router-link>
    </div>

    <!-- NEW MENU -->
    <div class="fixed full-menu z-50 flex tablet:flex-row flex-col text-white">
      <div
        class="
          tablet:flex
          hidden
          w-10%
          h-60v
          border-solid border-r-3 border-white
          items-center
          justify-center
          font-bold
        "
      >
        <div class="text-xl bottomToTop">
          Développeur Front-end<span class="contourText">
            et bien plus encore !</span
          >
        </div>
      </div>
      <div class="w-40% flex justify-center items-center">
        <nav id="menu" class="menu text-left font-bold">
          <ul class="lien leading-loose">
            <router-link
              to="/"
              class="flex flex-row items-center cursor-pointer"
            >
              <span class="text-orange text-xl mr-8">01</span>
              <li class="hoverContour">Acceuil</li></router-link
            >
            <router-link
              to="/about"
              class="flex flex-row items-center cursor-pointer"
              active-class="activeLink"
            >
              <span class="text-orange text-xl mr-8">02</span>
              <li class="hoverContour">About</li></router-link
            >
            <router-link
              to="/projects"
              class="flex flex-row items-center cursor-pointer"
              active-class="activeLink"
            >
              <span class="text-orange text-xl mr-8">03</span>
              <li class="hoverContour">Projets</li></router-link
            >
            <router-link
              to="/contact"
              class="flex flex-row items-center cursor-pointer"
            >
              <span class="text-orange text-xl mr-8">04</span>
              <li class="hoverContour">Contact</li></router-link
            >
          </ul>
        </nav>
      </div>
      <div
        class="
          w-40%
          h-60v
          tablet:flex
          hidden
          border-solid border-l-3 border-white
          items-center
          justify-center
          p-12
        "
      >
        <ul class="leading-6 text-lg text-left">
          <li class="p-6">Je veux lancer <br />mon site e-commerce</li>
          <li class="p-6">Je veux refondre ou <br />développer mon site</li>

          <li class="p-6 mb-8">
            Je veux créer ou enrichir <br />mon identité visuelle
          </li>
          <router-link
            to="/contact"
            class="text-2xl font-bold flex flex-row items-center"
            ><span class="text-orange text-3xl mr-2 ml-6">→</span>
            <li class="p-6">
              Il est temps de prendre <br />un café ensemble alors !
            </li></router-link
          >
        </ul>
      </div>
      <div
        class="
          w-10%
          tablet:h-60v
          h-20v
          flex
          tablet:justify-end
          justify-center
          tablet:items-center
          items-end
          tablet:text-right
          text-center
          tablet:border-solid
          tablet:border-l-3
          tablet:border-white
          tablet:-ml-12
          -ml-0
          tablet:pr-4
          pr-0
          tablet:pt-0
          mt-5
        "
      >
        <ul class="leading-10 tablet:font-bold">
          <li class="tablet:py-2">
            <a :href="reseaux.instagram" target="_blank">INSTAGRAM</a>
          </li>
          <li class="tablet:py-2">
            <a :href="reseaux.linkedin" target="_blank">LINKEDIN</a>
          </li>

          <li class="tablet:py-2">
            <a :href="reseaux.github" target="_blank">GITHUB</a>
          </li>
        </ul>
      </div>
    </div>

    <button
      class="
        fixed
        flex flex-row
        items-center
        justify-between
        bg-white
        py-1
        px-4
        text-blue
        border-6 border-blue border-solid
        hamburguer
        indexMargin
        tablet:right-60
        right-20
        tablet:top-60
        top-20
        -mt-0.5
        :active:shadow-sm
      "
    >
      <div class="menu-trait">
        <div class="lines line-top"></div>
        <div class="lines line-mid"></div>
        <div class="lines line-bottom"></div>
      </div>
      <div class="tablet:flex font-black pl-4 hidden">MENU</div>
    </button>
  </div>
</template>

<script>
import datas from '../datas/data.json'
export default {
  name: 'Navbar',
  data() {
    return {
      reseaux: datas.reseaux,
    }
  },
  computed: {
    isExternal() {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
  mounted() {
    // Using Vanilla JS
    document
      .querySelector('.hamburguer')
      .addEventListener('click', function () {
        document.querySelector('.full-menu').classList.toggle('active')
        document
          .querySelector('.hamburguer')
          .classList.toggle('close-hamburguer')
      })

    document.querySelector('.lien').addEventListener('click', function () {
      document.querySelector('.full-menu').classList.toggle('active')
      document.querySelector('.hamburguer').classList.toggle('close-hamburguer')
    })
  },
}
</script>

<style lang="scss" scoped>
.indexMargin {
  z-index: 1000;
}
.logo {
  width: 200px;
}
.logo:hover {
  animation: shake 0.3s;
  animation-iteration-count: initial;
}
.bottomToTop {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
.contourText {
  @apply text-blue;
  text-shadow: -0.6px 0 #fcfcfc, 0 0.6px #fcfcfc, 0.6px 0 #fcfcfc,
    0 -0.6px #fcfcfc;
}
.hoverContour {
  @apply text-offwhite;
}
.hoverContour:hover {
  @apply text-blue;
  text-shadow: -1px 0 #fcfcfc, 0 1px #fcfcfc, 1px 0 #fcfcfc, 0 -1px #fcfcfc;
}
.menu-trait {
  @apply relative;
  width: 20px;
  z-index: 60;
}
.lien {
  font-size: 4rem;
}

.full-menu li:hover {
  animation: shake 0.3s;
  animation-iteration-count: initial;
}
.activeLink {
  text-decoration: line-through;
}
.activeLink > span {
  text-decoration: none;
}
.activeLink > li {
  color: #0123ff;
  transform: rotate(-5deg);
  text-shadow: -1px 0 #fcfcfc, 0 1px #fcfcfc, 1px 0 #fcfcfc, 0 -1px #fcfcfc;
}

@-webkit-keyframes zoom {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
@keyframes zoom {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.full-menu {
  position: relative;
  width: 91.4vw;
  top: 80px;
  display: none;
  height: 84.8vh;
  align-items: center;
  justify-content: center;
  background-color: #0123ff;
  transform: translateX(120%);
  transition: all 300ms ease-in;
  opacity: 0;
}
.full-menu ul {
  list-style: none;
}
.full-menu.active {
  display: flex;
  transform: translateX(0%);
  opacity: 1;
  z-index: 30;
}
.hamburguer:hover {
  animation: shake 0.3s;
  animation-iteration-count: initial;
}
.lines {
  background-color: #0123ff;
  width: 100%;
  height: 3px;
  margin: 3px 0;
  transition: all 450ms ease-in;
}

.close-hamburguer .lines {
  cursor: pointer;
}
.close-hamburguer .line-top {
  transform: translateY(200%) rotate(45deg);
}
.close-hamburguer .line-mid {
  opacity: 0;
}
.close-hamburguer .line-bottom {
  transform: translateY(-200%) rotate(135deg);
}

@media (max-width: 767px) {
  .full-menu {
    position: relative;
    width: 81.2vw;
    top: 40px;
    display: none;
    height: 90.8vh;
    align-items: center;
    justify-content: center;
    background-color: #0123ff;
    transform: translateX(120%);
    transition: all 300ms ease-in;
    opacity: 0;
  }

  .lien {
    font-size: 2.5rem;
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
