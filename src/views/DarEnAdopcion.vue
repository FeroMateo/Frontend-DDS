<template>
  <v-app>
    <!--BARRA-->
    <barraSuperior/>
    <!--Contenedor-->

  <!-- Sizes your content based upon application components -->
  <v-main>
    <h1 style="font-family:helvetica" class="ml-10">
      <i>DAR EN ADOPCION
      </i>
      </h1>
    <!-- Provides the application the proper gutter -->
    <v-container>
      <v-sheet
        color="white"
        elevation="5"
        shaped
      >
      <menu-adoptar/>
      <foto/>
      


      </v-sheet>
    </v-container>

  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
  import BarraSuperior from '../components/barraSuperior.vue'
  import MenuAdoptar from '../components/menuAdoptar.vue'
  import Foto from '../components/foto.vue'
  export default {
    name: 'DarEnAdopcion',
    

    components: {
      BarraSuperior,
      MenuAdoptar,
      Foto,
    },
  }
</script>
