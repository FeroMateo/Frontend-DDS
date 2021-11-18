<template>
<v-app>
  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <conteiner-signin/>
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
  
  import ConteinerSignin from '../components/conteinerSignin.vue'

  export default {
    name: 'Signin',

    components: {
      ConteinerSignin,
    },
  }
</script>
