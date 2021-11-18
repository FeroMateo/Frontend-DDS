<template>
  <v-app>
    <!--BARRA-->
    <barraSuperior/>
    <!--Contenedor-->

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container>
      <h1>REGISTRAR MASCOTA</h1>
      <stepper-mascota/>
    </v-container>
    
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
  import BarraSuperior from '../components/barraSuperior.vue'
  import StepperMascota from '../components/stepperMascota.vue'

  export default {
    name: 'RegistrarMascota',

    components: {
      BarraSuperior,
      StepperMascota,
    },
  }
</script>
