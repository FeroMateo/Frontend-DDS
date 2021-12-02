


<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Datos del Dueño
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Datos de la mascota
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Finalizar
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
        elevation="4"
        outlined
        max-width="600"
        class="mx-auto"
        >
      <v-text-field
        label="Nombre"
        required
        v-model="nombre"
      ></v-text-field>

      <v-text-field
        label="Apellido"
        required
        v-model="apellido"
      ></v-text-field>

      <v-text-field
        label="Tipo Documento"
        required
        v-model="tipoDocumento"
      ></v-text-field>

      <v-text-field
        label="Numero Documento"
        required
        v-model="numeroDocumento"
      ></v-text-field>

      <v-text-field
        label="Email"
        required
        v-model="email"
      ></v-text-field>

      <v-text-field
        label="Fecha de nacimiento"
        required
        type="date"
        v-model="fechaNacimiento"
      ></v-text-field>

      <v-text-field
        label="Telefono"
        required
        v-model="telefono"
      ></v-text-field>
      <v-row>
      <v-col> <agregar-contacto
        :nombreContacto.sync="nombreContacto"
        :apellidoContacto.sync="apellidoContacto"
        :emailContacto.sync="emailContacto"
        :telefonoContacto.sync="telefonoContacto"
        :idsFormaNotificacionContacto.sync="idsFormaNotificacionContacto"
      ></agregar-contacto></v-col>
      <v-col> <agregar-domicilio
        :calleDomicilio.sync="calleDomicilio"
        :alturaDomicilio.sync="alturaDomicilio"
        :pisoDomicilio.sync="pisoDomicilio"
        :departamentoDomicilio.sync="departamentoDomicilio"
      ></agregar-domicilio></v-col>
      </v-row>
      <v-row align="center">
      <v-col cols="12">
      <v-select
        :items="formasNotif"
                  item-text="nombre"
                  label="Forma de Notificacion"
                  required
                  v-model="idsFormasDeNotificacion"
                  multiple
                  return-object
      ></v-select>

     
    </v-col>

    

   <!--AGREGAR CONTACTO-->
  </v-row>
    
    </v-card>
        <v-btn
          color="primary"
          @click="persistirPersona"

        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
        elevation="4"
        outlined
        max-width="600"
        class="mx-auto"
    >
      
      <agregar-mascota-completa
        class="mt-7"
        :nombreMascota.sync="nombreMascota"
        :apodoMascota.sync="apodoMascota"
        :edadMascota.sync="edadMascota"
        :sexoMascota.sync="sexoMascota"
        :descripcionMascota.sync="descripcionMascota"
        :fotoMascota.sync="fotoMascota"
        :especieAnimalMascota.sync="especieAnimalMascota"
      ></agregar-mascota-completa>

      <agregar-caracteristicas
      class="mt-5"
      :caracteristicasElegidas.sync="caracteristicasElegidas"
      ></agregar-caracteristicas>
    
    <!--AGREGAR FOTO Y CARACTERISTICA-->
    
    </v-card>

        <v-btn
          color="primary"
          @click="persistirMascota"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
       

        <v-btn
          color="primary"
          @click="login"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  import AgregarContacto from '../components/agregarContacto.vue'
  import AgregarDomicilio from '../components/agregarDomicilio.vue'
  import AgregarCaracteristicas from '../components/agregarCaracteristicas.vue'
  import AgregarMascotaCompleta from '../components/agregarMascotaCompleta.vue'

  export default {
    data:() =>({
      e1:1,
      formasNotif:[],
      especies:["GATO","PERRO"],
    }),

    DuenioMascota:
    {
      duenio:{
        nombre:"",
        apellido:"",
        tipoDocumento:"",
        numeroDocumento:"",
        telefono:"",
        email:"",
        fechaNacimiento:"",
        idsFormasDeNotificacion:"",
        contacto:
        {
          nombreContacto:"",
          apellidoContacto:"",
          emailContacto:"",
          telefonoContacto:"",
          idsFormaNotificacionContacto:"",
        },
        domicilio:
        {
          calleDomicilio:"",
          alturaDomicilio:"",
          departamentoDomicilio:"",
          pisoDomicilio:"",
        },
      },
      mascotita:{
        nombreMascota:"",
        apodoMascota:"",
        edadMascota:"",
        sexoMascota:"",
        descripcionMascota:"",
        fotoMascota:"",
        especieAnimalMascota:"",
        //CARACTERISTICAS ES  ID Y VALOR
        caracteristicasElegidas:"",
      },
    },

    components:
    {
        AgregarContacto,
        AgregarDomicilio,
        AgregarCaracteristicas,
        AgregarMascotaCompleta,
    },
    methods:
    {
        persistirPersona: function()
        {
            this.e1 = 2
        },
        persistirMascota: function()
        {
            this.e1 = 3
        },
        finalizar: function()
        {
            this.$router.push({ name: "Home"})
        },
        getNotif: function () {
                fetch(process.env.VUE_APP_HOST+"/formas-de-noti", {
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(datos => {
                         this.formasNotif=datos
                    })
            },
        login: function () {
                fetch(process.env.VUE_APP_HOST+"/mascotas", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      duenio:{
                        nombre:this.nombre,
                        apellido:this.apellido,
                        documento:{
                          tipo:this.tipoDocumento,
                          numero:this.numeroDocumento,
                        },
                        telefono:this.telefono,
                        email:this.email,
                        
                        contactos:[{
                          nombre:this.nombreContacto,
                          apellido:this.apellidoContacto,
                          email:this.emailContacto,
                          telefono:this.telefonoContacto,
                          idsFormasDeNotificacion:this.idsFormaNotificacionContacto,
                        }],
                        domicilio:{
                          calle:this.calleDomicilio,
                          altura:this.alturaDomicilio,
                          piso:this.pisoDomicilio,
                          departamento:this.departamentoDomicilio,
                        },
                        fechaNacimiento:this.fechaNacimiento,
                        idsFormasDeNotificacion:this.idsFormasDeNotificacion.map(x=>x.id),
                      },
                      mascotita:{
                        especieAnimal:this.especieAnimalMascota,
                        nombre:this.nombreMascota,
                        apodo:this.apodoMascota,
                        edadAproximada:this.edadMascota,
                        sexo:this.sexoMascota,
                        descripcionFisica:this.descripcionMascota,
                        pathsFotos:[this.fotoMascota.contenidoBase64],
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
    beforeMount()
    {
      this.getNotif()
    },
}
</script>