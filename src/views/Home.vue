<template>
  <v-app>
  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <menu-loco/>
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
  import MenuLoco from '../components/menu-loco.vue'

  export default {
    name: 'Home',

    components: {
      MenuLoco,
    },
  }
</script>
