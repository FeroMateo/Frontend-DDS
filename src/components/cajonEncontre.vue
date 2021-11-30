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
            :rules="nameRules"
            :counter="10"
            label="Apellido"
            required
          ></v-text-field>
          <v-text-field
            v-model="fechaRescate"
            :rules="nameRules"
            type="date"
            :counter="10"
            label="Fecha"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="tipoDocumentoRescatista"
            :rules="nameRules"
            :counter="10"
            label="Tipo documento"
            required
          ></v-text-field>
          <v-text-field
            v-model="numeroDocumentoRescatista"
            :rules="nameRules"
            :counter="10"
            label="Numero de documento"
            required
          ></v-text-field>
          <v-text-field
            v-model="direccionRescatista"
            :rules="nameRules"
            :counter="10"
            label="Direccion"
            required
          ></v-text-field>
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
        :calleDomicilio.sync="calleDomicilio"
        :alturaDomicilio.sync="alturaDomicilio"
        :pisoDomicilio.sync="pisoDomicilio"
        :departamentoDomicilio.sync="departamentoDomicilio"
        ></agregar-domicilio>

        <agregar-mascota
        :descripcionMascota.sync="descripcionMascota"
        :fotosMascota.sync="fotosMascota"
        :ubicacionMascota.sync="ubicacionMascota"
        ></agregar-mascota>

        

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
        fotosMascota:"",
        ubicacionMascota:"",

        nombreRescatista:"",
        apellidoRescatista:"",
        direccionRescatista:"",
        tipoDocumentoRescatista:"",
        numeroDocumentoRescatista:"",
        fechaRescate:"",

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
    },

    methods:
    {
    encontreMascotaSinChapita: function () {
                fetch("http://localhost:8080/encontreMascota", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        persona:
                        {
                          nombre:this.nombreRescatista,
                          apellido:this.apellidoRescatista,
                          direccion:this.direccionRescatista,
                          tipoDocumento:this.tipoDocumentoRescatista,
                          numeroDocumento:this.numeroDocumentoRescatista,
                          fechaNacimiento:this.fechaRescate,
                          contactos:
                          [{
                            nombre:this.nombreContacto,
                            apellido:this.apellidoContacto,
                            email:this.emailContacto,
                            telefono:this.telefonoContacto,
                            idsFormaNotificacionContacto:this.idsFormaNotificacionContacto,
                          }],
                          domicilio:
                          {
                            calle:this.calleDomicilio,
                            altura:this.alturaDomicilio,
                            piso:this.pisoDomicilio,
                            departamento:this.departamentoDomicilio,
                          }
                        },
                        mascotita:
                        {
                          descripcion:this.descripcionMascota,
                          fotos:this.fotosMascota,
                          ubicacion:this.ubicacionMascota,
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