


<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Datos del Dueño
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Datos de la mascota
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Finalizar
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
        <registrar-persona/>
    
        </v-card>
        <v-btn
          color="primary"
          @click="persistirPersona"

        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
        <registro-mascota/>
        </v-card>

        <v-btn
          color="primary"
          @click="persistirMascota"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
        <h1>BUENISIMO PA</h1>
        </v-card>

        <v-btn
          color="primary"
          @click="finalizar"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import RegistrarPersona from '../components/registroPersona.vue'
import RegistroMascota from '../components/registroMascota.vue'
  export default {
    data () {
      return {
        e1: 1,
      }
    },
    methods:
    {
        persistirPersona: function()
        {
            this.e1 = 2
            console.log("Se persistio")
        },
        persistirMascota: function()
        {
            this.e1 = 3
            console.log("Se persistio")
        },
        finalizar: function()
        {
            this.$router.push({ name: "Home"})
        }
    },
    components:
    {
        RegistrarPersona,
        RegistroMascota,
    }
  }
</script>