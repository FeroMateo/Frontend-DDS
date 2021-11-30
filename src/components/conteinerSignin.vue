<template>
  <v-card class="mx-auto" max-width="400">
    <v-toolbar color="#FFEEBD">
      <v-toolbar-title>Registrarse</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-form v-model="valid">
      <div id="appVue">
        <v-container>
          <v-col cols="auto" md="4">
            <v-text-field
              v-model="usuario"
              type="text"
              label="Usuario"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="auto" md="4">
            <v-text-field
              v-model="email"
              type="text"
              label="email"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="auto" md="4">
            <v-text-field
              v-model="password"
              type="password"
              label="contraseña"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="auto" md="6">
            <v-text-field
              v-model="repassword"
              type="password"
              label="Repetir Contraseña"
              required
            ></v-text-field>
          </v-col>

          <v-btn @click="login">Signin</v-btn>
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
    email: "",
    repassword: "",

    mensaje: "No estoy logueado",
  }),
  methods: {
    signin: function () {
                fetch("http://localhost:8080/signin", {
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
};
</script>
