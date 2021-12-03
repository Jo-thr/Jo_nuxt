<template>
  <div class="relative flex flex-col items-center w-full bg-offwhite">
    <div class="container flex flex-col items-center">
      <div class="bg-blue w-full bg-header-about mt-40"></div>
      <div
        class="
          bg-offwhite
          w-70%
          text-center
          pt-12
          -mt-14
          font-fontTitle
          text-header-h2
          uppercase
          font-bold
          text-blue
        "
      >
        Tout savoir sur moi
      </div>
      <p class="w-70% text-justify my-14 font-paragraph text-desktop-paragraph">
        Depuis plusieurs années, je suis connecté professionnellement à
        l'industrie du développement Web et au design d'interfaces.<br /><br />

        Personne bien organisée, plutôt cartisienne et structurée, j'aime
        trouver la solution aux problèmes. Employé chez One4You depuis plus de 2
        ans et demi avec en parallèle une expérience d'indépendant. Intéressé
        par l’ensemble du spectre front-end et travaillant sur des projets
        d’ambitions. J’aime être au plus proche d’un rendu réaliste et
        réalisable pour un développeur, prendre en compte toutes les
        contraintes, tout en portant une grande attention aux détails.
        <br /><br />
        Durant mes temps libres, je porte la casquette de joueur de basket, de
        photographe amateur. Je pratique de nombreuses activités en plein air,
        adore la curiosité, la littérature et, plus récemment, jeune promeneur
        de chien.
      </p>
    </div>

    <div class="bg-blue w-full h-60v mt-2"></div>

    <div class="container flex flex-col items-center">
      <p class="w-70% text-justify my-14 font-paragraph text-desktop-paragraph">
        D'abord Designer d'interface, je me suis peu à peu spécialisé dans le
        développement front-end pour lequel j'ai développé une grande passion au
        point de vouloir m'y consacrer aujourd'hui : à temps plein !
        <br /><br />
        Polyvalent et adaptable à n’importe quel type de situation. Je n’ai
        jamais échoué un projet. Je pense que cela vient du fait d’une bonne
        communication au sein de l’équipe avec laquelle je travaille et je
        n’hésite pas à challenger les décisions prisent si j’estime que le
        projet pourrait bénéficier d’idées plus pertinentes tout en s'appuyant
        sur des données.
        <br /><br />
        L'expertise et la communication sont les clés d'un projet réussi. Deux
        domaines dans lesquels vous pouvez me faire confiance.
      </p>
    </div>

    <div class="bg-blue w-full h-80 mt-2"></div>
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: 'page',
}
</script>

<style lang="scss" scoped>
.bg-header-about {
  height: 350px;
}
</style>
