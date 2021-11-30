<template>
    <v-card
        elevation="4"
        outlined
        shaped
    >
    <input type="text" v-model="nombre" placeholder="Nombre">
    <input type="text" v-model="apodo" placeholder="Apodo">
    <input type="text" v-model="edad" placeholder="Edad aproximada">
    <input type="text" v-model="sexo" placeholder="Sexo">
    <input type="text" v-model="descripcion" placeholder="Descripcion aproximada">

    <v-row align="center">
    <v-col cols="12">
      <v-select
        :items="items"
        :menu-props="{ top: true, offsetY: true }"
        label="Especie"
        v-model="especie"
      ></v-select>
    </v-col>
    </v-row>
    <!--AGREGAR FOTO Y CARACTERISTICA-->
    
    </v-card>
</template>

<script>
  export default {
    data: () => ({

      nombre: "",
      apodo:"",
      edad:"",
      sexo:"",
      descripcion:"",
      especie:"",

      items: ['Gato','Perro','Chinchilla'],
    }),
    methods: {
    login: function () {
                fetch("http://localhost:8080/mascotas", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.usuario,
                        password: this.password
                    })
                })
                    .then(response => response.json())
                    .then(datos => {
                        localStorage.setItem("IDSESION", datos.idSesion) //guarda ID
                        console.log(datos.idSesion)
                    })
            },
    prueba: function () {
                fetch("http://localhost:8080/login", {
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(datos => {
                        localStorage.setItem("IDSESION", datos.idSesion) //guarda ID
                        console.log(datos.idSesion)
                    })
            },
  },
  }
</script>