


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
        :items="servicios"
        :menu-props="{ top: true, offsetY: true }"
        label="Label"
        multiple
        v-model="idsFormasDeNotificacion"
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
    <v-text-field
        label="Nombre"
        required
        v-model="nombreM"
    ></v-text-field>

    <v-text-field
        label="Apodo"
        required
        v-model="apodo"
    ></v-text-field>

    <v-text-field
        label="Edad Aproximada"
        required
        v-model="edadAproximada"
    ></v-text-field>

    <v-text-field
        label="Sexo"
        required
        v-model="sexo"
    ></v-text-field>

    <v-text-field
        label="Descripcion Aproximada"
        required
        v-model="descripcionFisica"
    ></v-text-field>
  
    <v-row align="center">
    <v-col cols="12">
      <v-select
        :items="especies"
        :menu-props="{ top: true, offsetY: true }"
        label="Especie"
        v-model="especieAnimal"
      ></v-select>

      <agregar-caracteristicas
      class="mt-5"
      :caracteristicasElegidas.sync="caracteristicasElegidas"
      ></agregar-caracteristicas>
    </v-col>
    </v-row>
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

  export default {
    data:() =>({
      e1:1,
      servicios: [1,2,3],
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
        especieAnimal:"",
        nombreM:"",
        apodo:"",
        edadAproximada:"",
        sexo:"",
        descripcionFisica:"",
        pathsFotos:[],
        caracteristicasElegidas:[],
      },
    },

    components:
    {
        AgregarContacto,
        AgregarDomicilio,
        AgregarCaracteristicas,
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
        login: function () {
                fetch("http://localhost:8080/mascotas", {
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
                        idsFormasDeNotificacion:this.idsFormasDeNotificacion,
                      },
                      mascotita:{
                        especieAnimal:this.especieAnimal,
                        nombre:this.nombreM,
                        apodo:this.apodo,
                        edadAproximada:this.edadAproximada,
                        sexo:this.sexo,
                        descripcionFisica:this.descripcionFisica,
                        pathsFotos:[],
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