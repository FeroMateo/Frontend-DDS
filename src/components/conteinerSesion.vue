<template>
  <v-card class="mx-auto" max-width="400">
    <v-toolbar color="#1976D2">
      <v-toolbar-title>IniciarSesion</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-form v-model="valid">    
      <div id="appVue">
        <v-container>
    
        <v-col
          cols="auto"
          md="4"
        >
        <v-text-field 
          v-model="usuario" 
          label="nombre"
        ></v-text-field>

        </v-col>

        <v-col
          cols="auto"
          md="4"
        >

        <v-text-field 
          v-model="password" 
          type="password"
          label="contraseña"
        ></v-text-field>
        </v-col>

        <v-btn @click="login" color="#1976D2">Login</v-btn>

    </v-container>
      </div>
    </v-form>
  </v-card>
</template>

<script>

export default {
  data: () => ({
      usuario: "",
      password: "",
      mensaje: "No estoy logueado",    
  }),
  methods: {
    login: function () {
                fetch(process.env.VUE_APP_HOST+"/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        
                    },
                    body: JSON.stringify({
                        username: this.usuario,
                        password: this.password
                    })
                })
                    .then(response => response.json())
                    .then(datos => {

                        if(datos.idSesion!=null)
                        {
                          localStorage.setItem('IDSESION',datos.idSesion) //guarda ID
                          console.log(localStorage.getItem('IDSESION'))
                          console.log(datos)
                          this.$router.push({ name: "RegistrarMascota"})
                        }else
                        {
                          console.warn("ERROR")
                        }

                
                    })
            },
    prueba: function () {
                fetch(process.env.VUE_APP_HOST+"/login", {
                    method: "GET",
                })
                    .then(response => response.json())
                    .then(datos => {
                         console.log(datos.idSesion)
                        localStorage.setItem("IDSESION", datos.idSesion) //guarda ID
                       
                    })
            },
  },
};
</script>
