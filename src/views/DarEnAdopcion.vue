<template>
  <v-app>
    <!--BARRA-->
    <barraSuperior/>
    <!--Contenedor-->

  <!-- Sizes your content based upon application components -->
  <v-main>
    <h1 style="font-family:helvetica" class="ml-10">
      <i>DAR EN ADOPCION
      </i>
      </h1>
    <!-- Provides the application the proper gutter -->
    <v-container>
      <v-sheet
        color="white"
        elevation="5"
        shaped
        
      >
      <v-row align="center">
        <v-col><agregar-persona
        class="mt-10"
        :nombrePersona.sync="nombrePersona"
        :apellidoPersona.sync="apellidoPersona"
        :tipoDocumentoPersona.sync="tipoDocumentoPersona"
        :telefonoPersona.sync="telefonoPersona"
        :numeroDocumentoPersona.sync="numeroDocumentoPersona"
        :fechaPersona.sync="fechaPersona"
        :emailPersona.sync="emailPersona"
        :idsFormaDeNotificacionPersona.sync="idsFormaDeNotificacionPersona"

        ></agregar-persona>
        <agregar-contacto
        class="mt-10"
        :nombreContacto.sync="nombreContacto"
        :apellidoContacto.sync="apellidoContacto"
        :emailContacto.sync="emailContacto"
        :telefonoContacto.sync="telefonoContacto"
        :idsFormaNotificacionContacto.sync="idsFormaNotificacionContacto"
        ></agregar-contacto>
        <agregar-domicilio
        class="mt-10 mb-5"
        :calleDomicilio.sync="calleDomicilio"
        :alturaDomicilio.sync="alturaDomicilio"
        :pisoDomicilio.sync="pisoDomicilio"
        :departamentoDomicilio.sync="departamentoDomicilio"
        ></agregar-domicilio>
        </v-col>
        <v-img
          max-width="200"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>  
        <v-col>
        <agregar-mascota-completa
        class="mt-7"
        :nombreMascota.sync="nombreMascota"
        :apodoMascota.sync="apodoMascota"
        :edadMascota.sync="edadMascota"
        :sexoMascota.sync="sexoMascota"
        :descripcionMascota.sync="descripcionMascota"
        :fotosMascota.sync="fotosMascota"
        :especieAnimalMascota.sync="especieAnimalMascota"
        ></agregar-mascota-completa>

        <agregar-caracteristicas
        class="mt-7"
        :caracteristicasElegidas.sync="caracteristicasElegidas"
        ></agregar-caracteristicas>

        </v-col>
        
      </v-row>      
      </v-sheet>
    <v-btn 
        class="mt-11"
        color="green"
        @click="confirmarAdopcion">Confirmar Adopcion</v-btn>
    </v-container>


  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
  import BarraSuperior from '../components/barraSuperior.vue'
  import AgregarMascotaCompleta from '../components/agregarMascotaCompleta.vue'
  import AgregarPersona from '../components/agregarPersona.vue'
  import AgregarContacto from '../components/agregarContacto.vue'
  import AgregarDomicilio from '../components/agregarDomicilio.vue'
import AgregarCaracteristicas from '../components/agregarCaracteristicas.vue'


  export default {
    name: 'DarEnAdopcion',
    data: () => ({

        nombreContacto:"",
        apellidoContacto:"",
        emailContacto:"",
        telefonoContacto:"",
        idsFormaNotificacionContacto:"",

        calleDomicilio:"",
        alturaDomicilio:"",
        pisoDomicilio:"",
        departamentoDomicilio:"",
        
        nombreMascota:"",
        apodoMascota:"",
        edadMascota:"",
        sexoMascota:"",
        descripcionMascota:"",
        fotosMascota:"",
        especieAnimalMascota:"",
        //CARACTERISTICAS ES  ID Y VALOR
        caracteristicasElegidas:"",

        idsFormaDeNotificacionPersona:[],
        nombrePersona:"",
        apellidoPersona:"",
        tipoDocumentoPersona:"",
        telefonoPersona:"",
        emailPersona:"",
        numeroDocumentoPersona:"",
        fechaPersona:"",
        

      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),

    components: {
      BarraSuperior,
      AgregarMascotaCompleta,
      AgregarPersona,
      AgregarContacto,
      AgregarDomicilio,
        AgregarCaracteristicas,
    },
    methods:
    {
      confirmarAdopcion: function () {
                fetch("http://localhost:8080/adopciones", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        duenio:
                        {
                          nombre:this.nombrePersona,
                          apellido:this.apellidoPersona,
                          domicilio:
                          {
                            calle:this.calleDomicilio,
                            altura:this.alturaDomicilio,
                            piso:this.pisoDomicilio,
                            departamento:this.departamentoDomicilio,
                          },
                          fechaNacimiento:this.fechaPersona,
                          documento:
                          {
                            tipo:this.tipoDocumentoPersona,
                            numero:this.numeroDocumentoPersona,

                          },
                          telefono:this.telefonoPersona,
                          email:this.emailPersona,
                          idsFormasDeNotificacion:this.idsFormaDeNotificacionPersona,
                          contactos:
                          [{
                            nombre:this.nombreContacto,
                            apellido:this.apellidoContacto,
                            email:this.emailContacto,
                            telefono:this.telefonoContacto,
                            idsFormasDeNotificacion:this.idsFormaNotificacionContacto,
                          }],
                        },
                        mascotita:
                        {
                          especieAnimal:this.especieAnimalMascota,
                          nombre:this.nombreMascota,
                          apodo:this.apodoMascota,
                          edadAproximada:this.edadMascota,
                          sexo:this.sexoMascota,
                          descripcionFisica:this.descripcionMascota,
                          pathsFotos:[],
                          caracteristicas:this.caracteristicasElegidas
                        },
                        mensaje:"No molestar"
                    })
                })
                    .then(response => response.json())
                    .then(datos => {
                        localStorage.setItem("IDSESION",datos) //guarda ID
                        console.log(datos)
                    })
            },
    },
  }
</script>
