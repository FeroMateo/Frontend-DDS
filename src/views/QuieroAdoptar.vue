<template>
  <v-app>
  <!-- Sizes your content based upon application components -->
  <v-main>
    <barra-superior></barra-superior>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <v-sheet
      color="white"
      elevation="1"
      outlined
      rounded
      shaped
      max-width="900"
      class="mx-auto"
    >
    <agregar-persona
        class="mt-10"
        :nombrePersona.sync="nombrePersona"
        :apellidoPersona.sync="apellidoPersona"
        :tipoDocumentoPersona.sync="tipoDocumentoPersona"
        :telefonoPersona.sync="telefonoPersona"
        :numeroDocumentoPersona.sync="numeroDocumentoPersona"
        :fechaPersona.sync="fechaPersona"
        :emailPersona.sync="emailPersona"
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

      <v-select
          :items="especies"
          label="Forma de Notificacion"
          required
          v-model="especieAnimalMascota"
      ></v-select>
      <agregar-caracteristica
      ></agregar-caracteristica>


      </v-sheet>




      

    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
  import BarraSuperior from '../components/barraSuperior.vue'
  import AgregarPersona from '../components/agregarPersona.vue'
  import AgregarContacto from '../components/agregarContacto.vue'
  import AgregarDomicilio from '../components/agregarDomicilio.vue'
  import AgregarCaracteristica from '../components/agregarCaracteristicas.vue'


  export default {
    name: 'QuieroAdoptar',
    data: () => ({

        especies:["GATO","PERRO"],
        preferencias:[
          {
            especie:"",
            caracteristicas:
            {
              idCaracteristica:"",
              valor:"",
            },
          }],

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
        caracteristicasMascota:"",

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
      AgregarPersona,
      AgregarContacto,
      AgregarDomicilio,
      AgregarCaracteristica,
    },
    methods:
    {
      confirmarAdopcion: function () {
                fetch(process.env.VUE_APP_HOST+"/adopciones", {
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
                          idsFormasDeNotificacion:[1,2],
                          contactos:
                          [{
                            nombre:this.nombreContacto,
                            apellido:this.apellidoContacto,
                            email:this.emailContacto,
                            telefono:this.telefonoContacto,
                            idsFormasDeNotificacion:[1,2],
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
                          caracteristicas:
                          [{
                            idCaracteristica:1,
                            valor:"algo",
                          }],
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
