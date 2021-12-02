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
        v-for="n in publicaciones.length"
        :key="n"
      >
            <v-card
            :loading="loading"
            class="mx-auto my-12 ml-4"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="200"
              :src="foto"
            ></v-img>

            <v-card-title v-text="publicaciones[n-1].mascotaPerdida.especie"></v-card-title>
            <v-card-text v-text="publicaciones[n-1].mascotaPerdida.descripcion"></v-card-text>
            <v-card-text>Fue encontrado en {{publicaciones[n-1].mascotaPerdida.lugarEncuentro.direccion}}</v-card-text>
            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
              </v-row>

              <div class="ml-3" v-for="cualidad in publicaciones[n-1].mascotaPerdida.caracteristicas" :key=cualidad>•{{ cualidad.valor }}</div>

            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="green lighten-2"
                text
                @click='aprobar'
              >
                Aprobar
              </v-btn>
              <v-btn
                color="red lighten-2"
                text
                @click="rechazar"
              >
                Rechazar
              </v-btn>
            </v-card-actions>
          </v-card>
          
      </v-slide-item>
      
    </v-slide-group>
    <v-btn class="mb-5 mr-5" @click="postMascotasRescatadas"> Confirmar Publicacion</v-btn>
  </v-sheet>
</template>


<script>
export default
{

    data: () => ({

      model:null,
      foto:"https://ahseeit.com/spanish/king-include/uploads/2021/06/thumb_177002455_174685791182813_3055252107994467567_n-9980661562.jpg",

      publicaciones:[],
    }),
    methods:
    {
     
        aprobar: function(publicacion)
        {
            console.log('aprobo')
            publicacion.estaAprobada=true
        },
        rechazar: function(publicacion)
        {
            console.log('rechazo')
            publicacion.estaAprobada=false
        },
        getMascotasRescatadas: function () {
                fetch(process.env.VUE_APP_HOST+"/gestion/mascotas-perdidas", {
                    method: "GET",
                    headers: {
                        'Authorization':localStorage.getItem('IDSESION')
                    },
                })
                    .then(response => response.json())
                    .then(datos => {
                        this.publicaciones=datos
                        console.log(datos)
                    })
                },
          postMascotasRescatadas: function () {
                fetch(process.env.VUE_APP_HOST+"/mascotas-perdidas", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        publicaciones:this.publicaciones
                    })
                })
                    .then(response => response.json())
                    .then(datos => {
                        console.log(datos)
                    })
            },
    },
     beforeMount()
          {
            this.getMascotasRescatadas();
          }, 
}
</script>