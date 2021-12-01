<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="nombreRescatista"
            :rules="nameRules"
            :counter="10"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            v-model="apellidoRescatista"
            :counter="10"
            label="Apellido"
            required
          ></v-text-field>
          <v-text-field
            v-model="fechaRescate"
            type="date"
            :counter="10"
            label="Fecha"
            required
          ></v-text-field>
          <v-text-field
            v-model="emailRescatista"
            :counter="20"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="tipoDocumentoRescatista"

            :counter="10"
            label="Tipo documento"
            required
          ></v-text-field>
          <v-text-field
            v-model="numeroDocumentoRescatista"

            :counter="20"
            label="Numero de documento"
            required
          ></v-text-field>
          <v-text-field
            v-model="telefonoRescatista"

            :counter="20"
            label="Telefono"
            required
          ></v-text-field>
          <v-select
                  :items="[1,2,3]"
                  label="Forma de Notificacion"
                  required
                  v-model="idsFormaNotificacionRescatista"
                  multiple
                ></v-select>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        <agregar-contacto 
        :nombreContacto.sync="nombreContacto"
        :apellidoContacto.sync="apellidoContacto"
        :emailContacto.sync="emailContacto"
        :telefonoContacto.sync="telefonoContacto"
        :idsFormaNotificacionContacto.sync="idsFormaNotificacionContacto"
        
        ></agregar-contacto>


        <agregar-domicilio
        class="mt-10"
        :calleDomicilio.sync="calleDomicilio"
        :alturaDomicilio.sync="alturaDomicilio"
        :pisoDomicilio.sync="pisoDomicilio"
        :departamentoDomicilio.sync="departamentoDomicilio"
        ></agregar-domicilio>

        <agregar-mascota
        :descripcionMascota.sync="descripcionMascota"
        :fotosMascota.sync="fotosMascota"
        :ubicacionMascota.sync="ubicacionMascota"
        :latitudMascota.sync="latitudMascota"
        :longitudMascota.sync="longitudMascota"
        :direccionMascota.sync="direccionMascota"
        :especieAnimalMascota.sync="especieAnimalMascota"
        ></agregar-mascota>

        <agregar-caracteristicas
        class="mt-7"
        :caracteristicasElegidas.sync="caracteristicasElegidas"
        ></agregar-caracteristicas>

        </v-col>
      </v-row>

        <v-btn
            depressed
            elevation="4"
            class="align-center"
            @click="encontreMascotaSinChapita"
        >Confirmar Publicacion</v-btn>

    </v-container>
  </v-form>
</template>

<script>

import AgregarContacto from '../components/agregarContacto.vue'
import AgregarMascota from '../components/agregarMascota.vue'
import AgregarDomicilio from '../components/agregarDomicilio.vue'
import AgregarCaracteristicas from './agregarCaracteristicas.vue'
  export default {
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

        descripcionMascota:"",
        fotosMascota:[],
        direccionMascota:"",
        latitudMascota:"",
        longitudMascota:"",
        especieAnimalMascota:"",
        caracteristicasElegidas:"",

        nombreRescatista:"",
        apellidoRescatista:"",
        tipoDocumentoRescatista:"",
        numeroDocumentoRescatista:"",
        telefonoRescatista:"",
        emailRescatista:"",
        fechaRescate:"",
        idsFormaNotificacionRescatista:"",

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
    components:
    {
        AgregarContacto,
        AgregarMascota,
        AgregarDomicilio,
        AgregarCaracteristicas,
    },

    methods:
    {
    encontreMascotaSinChapita: function () {
                fetch("http://localhost:8080/mascotas-perdidas", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        rescatista:
                        {
                          nombre:this.nombreRescatista,
                          apellido:this.apellidoRescatista,
                          documento:
                          {
                            tipo:this.tipoDocumentoRescatista,
                            numero:this.numeroDocumentoRescatista,
                          },
                          fechaNacimiento:this.fechaRescate,
                          telefono:this.telefonoRescatista,
                          email:this.emailRescatista,
                          idsFormasDeNotificacion:this.idsFormaNotificacionRescatista,
                          contactos:
                          [{
                            nombre:this.nombreContacto,
                            apellido:this.apellidoContacto,
                            email:this.emailContacto,
                            telefono:this.telefonoContacto,
                            idsFormasDeNotificacion:this.idsFormaNotificacionContacto,
                          }],
                          domicilio:
                          {
                            calle:this.calleDomicilio,
                            altura:this.alturaDomicilio,
                            piso:this.pisoDomicilio,
                            departamento:this.departamentoDomicilio,
                          }
                        },
                        mascotitaPerdida:
                        {
                          descripcion:this.descripcionMascota,
                          pathsFotos:this.fotosMascota,
                          ubicacion:
                          {
                            latitud:this.latitudMascota,
                            longitud:this.longitudMascota,
                            direccion:this.direccionMascota,
                          },                         
                          especie:this.especieAnimalMascota,
                          caracteristicas:this.caracteristicasElegidas,
                        },
                    })
                })
                    .then(response => response.json())
                    .then(datos => {
                        console.log(datos)
                    })
            },
  },
}
</script>