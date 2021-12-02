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
            max-width="200"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img v-if="publicaciones[n-1].mascotaPerdida.fotos[0] != null"
              height="200"
              :src="publicaciones[n-1].mascotaPerdida.fotos[0].ruta"
            ></v-img>
            <v-img v-else
              height="200"
              :src="fotoDefault"
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
              
            </v-card-actions>
          </v-card>
          
      </v-slide-item>
      
    </v-slide-group>
    <v-btn class="mb-5 mr-5" @click="postMascotasRescatadas"> Volver</v-btn>
  </v-sheet>
</template>


<script>
export default
{

    data: () => ({

      model:null,
      fotoDefault:"https://images-ext-1.discordapp.net/external/5ZAsa5NmwhiT8KTzt1O5DO_5hHZqrXJKHt_1_dV6KE0/https/www.seattlefish.com/wp-content/themes/seattlefish/img/placeholder.png",

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
                fetch(process.env.VUE_APP_HOST+"/mascotas-perdidas", {
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(datos => {
                        this.publicaciones=datos
                        console.log(datos)
                    })
                },
          postMascotasRescatadas: function () {
                this.$router.push({ name: "Login"})
            },
    },
     beforeMount()
          {
            this.getMascotasRescatadas();
          }, 
}
</script>