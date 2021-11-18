<template>
<v-app>
  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <conteiner-sesion/>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
  
  import ConteinerSesion from '../components/conteinerSesion.vue'

  export default {
    name: 'Login',

    components: {
      ConteinerSesion,
    },
  }
</script>
