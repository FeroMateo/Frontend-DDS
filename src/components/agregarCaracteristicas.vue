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
          Agregar Caracteristicas
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Agregar Mascota</span>
        </v-card-title>
        <v-card-text>
          <v-container>
  
                  <v-sheet
                    class="mx-auto"
                    elevation="8"
                    max-width="800"
                  >
                    <v-slide-group
                      v-model="model"
                      class="pa-4"
                      prev-icon="mdi-minus"
                      next-icon="mdi-plus"
                      show-arrows
                    >
                      <v-slide-item
                        v-for="n in caracteristicas.length"
                        :key="n"
                        v-slot="{ active }"
                      >
                        <v-card
                          :color="active ? 'primary' : 'grey lighten-1'"
                          class="ma-4"
                          height="200"
                          width="100"
                        >
                        <v-card-text v-text="caracteristicas[n-1].descripcion"></v-card-text>
                        <v-text-field v-model="valores[n-1]"></v-text-field>
                        <v-btn @click="agregarCaracterizacion(caracteristicas[n-1].id,valores[n-1])">Save</v-btn>

                        </v-card>
                      </v-slide-item>
                    </v-slide-group>
                  </v-sheet>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
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
      valorPrueba:"",
      model:null,
      dialog: false,
      especies:["GATO","PERRO"],
      valores:[],
      caracteristicas: [
          
        ],      
      caracterizacion:{id:"",valor:""},
      caracterizaciones:[],
    }),
    components:
    {
    },
    methods:
    {
      getCaracteristicas: function () {
                fetch("http://localhost:8080/caracteristicas", {
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(datos => {
                        this.caracteristicas=datos
                        console.log(datos)
                        console.log(this.caracteristicas)
                    })
            },
            agregarCaracterizacion: function (unId,unValor) 
            {
              this.caracterizaciones.push({unId,unValor})
              console.log(this,this.caracterizaciones)
        },
        tamanioCarac: function (lista)
        {
         return lista.length() 
        }
    },
    beforeMount()
    {
      this.getCaracteristicas();
    }

}
</script>