<template>
  <v-app>
    <!--BARRA-->
    <barraSuperior/>
    <!--Contenedor-->

  <!-- Sizes your content based upon application components -->
  <v-main>
    <h1 class="ml-10">Mascotas Para Adoptar</h1>
     <slider2/>
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
  import Slider2 from '../components/slider2.vue'
  export default {
    name: 'MascotasRescatadasTotales',
    

    components: {
      BarraSuperior,
      Slider2,
    },
  }
</script>
