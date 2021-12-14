<template>
  <div>
    <div
      class="
        relative
        flex flex-row
        justify-center
        items-center
        font-paragraph
        w-full
        bg-offwhite
        h-screen
        tablet:overflow-y-hidden
        overflow-y-scroll
        tablet:my-0
        my-10
        tablet:py-0
        py-10
      "
    >
      <!-- CONTAINER LEFT -->
      <div
        class="
          flex flex-col
          tablet:h-screen
          h-auto
          tablet:w-55%
          w-full
          justify-center
          items-start
          tablet:pl-20
          pl-8
        "
      >
        <div
          class="
            font-fontTitle
            text-header-h2
            uppercase
            font-bold
            text-blue
            pb-2
            border-b-3 border-blue border-solid
          "
        >
          Contact
        </div>
        <p class="w-90% py-20">
          Partir d’une page blanche ou d’un cahier des charges de 100 pages.
          Évoluer dans le secteur du e-commerce, du tourisme, ou de l’industrie,
          en direction d’un site internet responsive 100% administrable ou d’un
          consumer magazine… Je peux vous accompagner sur tous les terrains.
          Prendre le bon itinéraire et faire bonne route, pas de hasard, mais
          une méthodologie éprouvée. Et si nous faisions un bout de chemin
          ensemble ?
        </p>
        <form
          accept-charset="UTF-8"
          method="POST"
          class="flex flex-col container-form"
          @submit.prevent="onSubmit()"
        >
          <div class="bg-white flex tablet:flex-row flex-col shadow-md">
            <div class="flex flex-col tablet:w-25% w-full p-6">
              <input
                v-model="name"
                type="text"
                class="py-2 pl-3 border-b-2 border-blue border-solid"
                placeholder="Votre nom & prénom"
                required="required"
              />
            </div>
            <div class="flex flex-col tablet:w-25% w-full p-6">
              <input
                v-model="email"
                type="email"
                class="py-2 pl-3 border-b-2 border-blue border-solid"
                placeholder="Adresse email"
                required="required"
              />
            </div>
            <div class="flex flex-col tablet:w-50% w-full p-6">
              <textarea
                v-model="message"
                rows="4"
                type="text"
                class="py-2 pl-3 border-b-2 border-r-2 border-blue border-solid"
                placeholder="Votre message"
                required="required"
              ></textarea>
            </div>
            <hr />
          </div>
          <div v-if="isSuccess === true" class="success mt-4 -mb-10 text-blue">
            Votre message est arrivé dans ma boite mail, merci !
          </div>
          <button
            type="submit"
            class="
              mt-20
              py-4
              px-12
              max-w-max
              bg-blue
              border-white border-opacity-0 border-4
              text-white
              font-bold
              uppercase
              hover:border-blue hover:border-4 hover:text-blue hover:bg-white
            "
          >
            Envoyer
          </button>
        </form>
      </div>
      <!-- CONTAINER RIGHT -->
      <div class="tablet:flex hidden h-screen w-45% bg-topography"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Contact',
  layout: 'page',
  data() {
    return {
      loading: true,
      name: '',
      email: '',
      message: '',
      isSuccess: false,
    }
  },
  head() {
    return {
      title: 'Contact | Jonathan Thr',
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      }
      axios
        .post(
          'https://getform.io/f/aeb3677e-5246-498d-b244-623e68cd618e',
          formData
        )
        .then(
          (response) => {
            this.isSuccess = !!response.data.success
            alert('Message envoyé !')
          },
          (response) => {
            // Error
          }
        )
    },
  },
}
</script>

<style lang="scss" scoped>
.container-form {
  @apply h-auto z-30;
  width: 90%;
  @screen tablet {
    @apply h-20v z-30;
    width: 180%;
  }
}
.bg-topography {
  @apply bg-cover bg-no-repeat bg-center bg-opacity-5 bg-blue;
  background-image: url('@/assets/images/topo-london.jpg');
}
</style>
