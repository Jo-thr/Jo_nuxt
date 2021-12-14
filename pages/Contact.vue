<template>
  <div class="font-paragraph">
    <div
      class="
        relative
        flex flex-row
        justify-center
        items-center
        w-full
        bg-offwhite
        h-screen
      "
    >
      <!-- CONTAINER LEFT -->
      <div
        class="flex flex-col h-screen w-55% justify-center items-start pl-20"
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
          <div class="bg-white flex flex-row shadow-md">
            <div class="flex flex-col w-25% p-6">
              <input
                v-model="name"
                type="text"
                class="
                  form-control
                  py-2
                  pl-3
                  border-b-2 border-blue border-solid
                "
                placeholder="Votre nom & prénom"
                required="required"
              />
            </div>
            <div class="flex flex-col w-25% p-6">
              <input
                v-model="email"
                type="email"
                class="
                  form-control
                  py-2
                  pl-3
                  border-b-2 border-blue border-solid
                "
                placeholder="Adresse email"
                required="required"
              />
            </div>
            <div class="flex flex-col w-50% p-6">
              <textarea
                v-model="message"
                type="text"
                rows="4"
                class="
                  form-control
                  py-2
                  pl-3
                  border-b-2 border-r-2 border-blue border-solid
                "
                placeholder="Votre message"
                required="required"
              ></textarea>
            </div>
            <hr />
            <div v-if="isSuccess" class="success">
              We received your submission, thank you!
            </div>
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
      <div class="flex h-screen w-45% bg-topography"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Contact',
  layout: 'page',
  props: {
    msg: String,
  },
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
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      }
      axios
        .post('https://formspree.io/f/meqpygjr', data, {
          headers: {
            Accept: 'application/json',
          },
        })
        .then(
          (response) => {
            this.isSuccess = !!response.data.success
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
  @apply h-20v z-30;
  width: 180%;
}
.bg-topography {
  @apply bg-cover bg-no-repeat bg-center bg-opacity-5 bg-blue;
  background-image: url('@/assets/images/topo-london.jpg');
}
</style>
