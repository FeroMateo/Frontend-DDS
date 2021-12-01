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
      <agregar-usuario
        class="mt-10 mb-5"
        :username.sync="username"
        :password.sync="password"
      ></agregar-usuario>
        

      </v-sheet>
      
    </v-container>

    <v-btn @click="signin">Confirmar</v-btn>
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
import AgregarUsuario from '../components/agregarUsuario.vue'


  export default {
    name: 'signIn',
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

        nombrePersona:"",
        apellidoPersona:"",
        tipoDocumentoPersona:"",
        telefonoPersona:"",
        emailPersona:"",
        numeroDocumentoPersona:"",
        fechaPersona:"",

        username:"",
        password:"",

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
      AgregarUsuario,
    },
    methods:
    {
      signin: function () {
                fetch(process.env.VUE_APP_HOST+"/sign-up", {
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
                        usuario:{
                          nombre:this.username,
                          contrasenia:this.password,
                        }
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
