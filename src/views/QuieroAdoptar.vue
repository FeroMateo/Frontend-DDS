<template>
  <v-app>
    <!--BARRA-->
    <barraSuperior/>
    <!--Contenedor-->

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container>
      <h1>Quiero adoptar</h1>
      <quieroAdoptar></quieroAdoptar>
    </v-container>
    
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
  import quieroAdoptar from '../components/quieroAdoptar.vue'

  export default {
    name: 'RegistrarMascota',

    components: {
      quieroAdoptar
    },
  }
</script>
