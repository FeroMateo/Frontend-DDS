<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="mb-10 mt-3"
        >
          Agregar Comodidades
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
              <v-card
                max-width="500"
                class="mx-auto"
              >
                <v-toolbar
                  color="indigo"
                  dark
                >
                  <v-toolbar-title>Agregar Comodidades</v-toolbar-title>

                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list>
                  <v-list-item
                    v-for="n in comodidadesElegidas.length"
                    :key="n"
                  >
                    <v-list-item-content>
                      <v-card-text v-text="comodidadesElegidas[n-1].descripcion"></v-card-text>
                        <v-switch

                          v-model="comodidadesElegidas[n-1].seCumple"
                          :label="`Switch 1: ${comodidadesElegidas[n-1].seCumple.toString()}`"
                        ></v-switch>
                     
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
                 
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="finalizar"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

  export default {
    data: () => ({
      switch1:"",
      dialog: false,
      especies:["GATO","PERRO"],
      valores:[],
      comodidadesElegidas: [
        {descripcion:"Patio",seCumple:false},
        {descripcion:"Hogar Espacioso",seCumple:false},
        {descripcion:"Otra Mascota",seCumple:false},
        ],      
      caracterizacion:{id:"",valor:""},
      caracterizaciones:[],
    }),
    components:
    {
    },
    methods:
    {
      finalizar: function() 
      {
        this.$emit('update:comodidadesElegidas', this.comodidadesElegidas)
        this.dialog = false
      }
    },
}
</script>