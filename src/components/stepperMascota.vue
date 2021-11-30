


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
        >
      <input type="text" v-model="nombre" placeholder="Nombre">
      <input type="text" v-model="apellido" placeholder="Apellido">
      <input type="text" v-model="tipo" placeholder="Tipo de documento">
      <input type="text" v-model="numero" placeholder="Numero de documento">
      <input type="text" v-model="telefono" placeholder="Numero de telefono">
      <input type="text" v-model="email" placeholder="E-Mail">
      <v-row align="center">
      <v-col cols="12">
      <v-select
        :items="items"
        :menu-props="{ top: true, offsetY: true }"
        label="Label"
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
    >
    <input type="text" v-model="nombreM" placeholder="Nombre">
    <input type="text" v-model="apodo" placeholder="Apodo">
    <input type="text" v-model="edadAproximada" placeholder="Edad aproximada">
    <input type="text" v-model="sexo" placeholder="Sexo">
    <input type="text" v-model="descripcionFisica" placeholder="Descripcion aproximada">

    <v-row align="center">
    <v-col cols="12">
      <v-select
        :items="especies"
        :menu-props="{ top: true, offsetY: true }"
        label="Especie"
        v-model="especieAnimal"
      ></v-select>
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
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
        <h1>BUENISIMO PA</h1>
        </v-card>

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
  export default {
    data:() =>({
      e1:1,
      items: ['WP','MAIL','SMS'],
      especies:['GATO','PERRO'],
    }),

    DuenioMascota:
    {
      duenio:{
        nombre:"",
        apellido:"",
        tipo:"",
        numero:"",
        telefono:"",
        email:"",
        formaNotif:[1],
        contactos:[],
      },
      mascotita:{
        especieAnimal:"",
        nombreM:"",
        apodo:"",
        edadAproximada:"",
        sexo:"",
        descripcionFisica:"",
        pathsFotos:[],
        caracteristicas:[],
      },
    },
    methods:
    {
        persistirPersona: function()
        {
            this.e1 = 2
            console.log(this.nombre)
            console.log(this.apellido)
        },
        persistirMascota: function()
        {
            this.e1 = 3
            console.log(this.nombreM)
            console.log(this.apodo)
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
                          tipo:this.tipo,
                          numero:this.numero,
                        },
                        telefono:this.telefono,
                        email:this.email,
                        formaNotif:this.formaNotif,
                        contactos:[{nombre:"Jose",apellido:"Ruiz",telefono:"123",email:"asd",idsFormasDeNotificacion:[1]}]
                      },
                      mascotita:{
                        especieAnimal:this.especieAnimal,
                        nombreM:this.nombreM,
                        apodo:this.apodo,
                        edadAproximada:this.edadAproximada,
                        sexo:this.sexo,
                        descripcionFisica:this.descripcionFisica,
                        pathsFotos:this.pathsFotos,
                        caracteristicas:this.caracteristicas,
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