<template>
  <v-container
    class="px-0"
    fluid
  >
    <v-checkbox
      v-model="checkbox"
      :dice="checkearChapita()"
      :label="`Tiene Chapita: ${this.checkbox.toString()}`"
    >
    </v-checkbox>

    <cajon/>
    
  </v-container>
</template>







<script>
import Cajon from '../components/cajonEncontre.vue'
  export default {
    data () {
      return {
        checkbox: true,
      }
    },

    methods:
    {
        checkearChapita: function()
        {
            if(this.checkbox)
            {
                console.log("hola")
            }
        },
    },
    components:
    {
        Cajon,
    }
  }
</script>