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
                  <v-toolbar-title>Agregar Caracteristica</v-toolbar-title>

                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list>
                  <v-list-item
                    v-for="n in caracteristicas.length"
                    :key="n"
                  >
                    <v-list-item-content>
                      <v-card-text v-text="caracteristicas[n-1].descripcion"></v-card-text>
                      <v-text-field v-model="valores[n-1]"></v-text-field>
                      <v-btn @click="agregarCaracterizacion(caracteristicas[n-1].id,valores[n-1])">Save</v-btn>         
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
      dialog: false,
      especies:["GATO","PERRO"],
      valores:[],
      caracteristicas: [
        
        ],      
      caracterizacion:{id:"",valor:""},
      caracteristicasElegidas:[],
    }),
    components:
    {
    },
    methods:
    {
      finalizar: function() 
      {
        this.$emit('update:caracteristicasElegidas', this.caracteristicasElegidas)
        this.dialog = false
      },
      getCaracteristicas: function () {
                fetch(process.env.VUE_APP_HOST+"/caracteristicas", {
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(datos => {
                        this.caracteristicas=datos
                        console.log(datos)
                        console.log(this.caracteristicas)
                    })
            },
            agregarCaracterizacion: function (idCaracteristica,valor) 
            {
              this.caracteristicasElegidas.push({idCaracteristica,valor})
              console.log(this,this.caracteristicasElegidas)
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