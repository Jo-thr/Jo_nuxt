<template>
  <div
    class="
      relative
      flex flex-col
      items-center
      h-full
      w-full
      bg-offwhite
      overflow-scroll
    "
  >
    <div class="w-70p mb-12 text-left mt-28">
      <h2 class="font-black">ABOUT</h2>
      <h2 class="titleContour">Jonathan Thr</h2>
    </div>

    <div class="flex w-80p h-40v">
      <div class="relative w-full h-40v bg-header-about z-20"></div>
      <div class="absolute right-20p w-30p h-40v -mt-12 bg-blue z-10"></div>
    </div>

    <div class="flex w-30p items-center justify-center mt-12">
      <img src="../assets/icons/bottom.png" class="w-10p p-4" />
    </div>

    <div class="flex w-70p flex-nowrap items-start justify-around mt-12">
      <p class="w-40p text-justify">
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
      <p class="w-40p text-justify">
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
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: 'page',
}
</script>

<style>
.bg-header-about {
  background-image: url('../assets/images/SFAC-05174.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.titleContour {
  color: #f7f7f7;
  text-shadow: -1px 0 #2c2c2c, 0 1px #2c2c2c, 1px 0 #2c2c2c, 0 -1px #2c2c2c;
}
</style>
