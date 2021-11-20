<template>
  <v-card class="mx-auto" max-width="400">
    <v-toolbar color="#FFEEBD">
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
          required
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
          required
        ></v-text-field>
        </v-col>

        <v-btn @click="login">Login</v-btn>

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
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
