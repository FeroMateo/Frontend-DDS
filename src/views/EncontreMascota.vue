<template>
  <v-app>
    <!--BARRA-->
    <barraSuperior/>
    <!--Contenedor-->

  <!-- Sizes your content based upon application components -->
  <v-main>
    <h1 style="font-family:helvetica" class="ml-10">
      <i>Encontre una mascota
      </i>
      </h1>
    <!-- Provides the application the proper gutter -->
    <v-container>
      <v-sheet
        color="white"
        elevation="5"
        shaped
      >
        <tienechapita/>
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
  import Tienechapita from '../components/tieneChapita.vue'
  export default {
    name: 'EncontreMascota',
    

    components: {
      BarraSuperior,
      Tienechapita,
    },
  }
</script>
