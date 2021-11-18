<template>
  <v-app>
    <!--BARRA-->
    <barraSuperior/>
    <!--Contenedor-->

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      
    </v-container>
    
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
  import BarraSuperior from '../components/barraSuperior.vue'

  export default {
    name: 'MenuUsuario',

    components: {
      BarraSuperior,
    },
  }
</script>
