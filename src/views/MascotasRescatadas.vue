<template>
  <v-app>
    <!--BARRA-->
    <barraSuperior/>
    <!--Contenedor-->

  <!-- Sizes your content based upon application components -->
  <v-main>
    <h1 class="ml-10">Mascotas Rescatadas</h1>
     <slider/>
    <!-- Provides the application the proper gutter -->
    <v-container>
     
    </v-container>

  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
  import BarraSuperior from '../components/barraSuperior.vue'
  import Slider from '../components/slider.vue'
  export default {
    name: 'MascotasRescatadas',
    

    components: {
      BarraSuperior,
      Slider,
    },
  }
</script>
