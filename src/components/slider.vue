<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="1000"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
    
      <v-slide-item
        v-for="n in 15"
        :key="n"
      >
        <card/>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>



</template>


<script>

import Card from '../components/cardTemplate.vue'

export default
{
    components:
    {
        Card,
    }
}
</script>