<template>
  <v-card
    class="mx-auto"
    max-width="820"
  >
    <v-toolbar
      color="#FFEEBD"
    >
      <v-toolbar-title>IniciarSesion</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-list three-line>
        <div id="appVue">
            <input type="text" v-model="usuario" placeholder="Usuario">
            
            <input type="text" v-model="password" placeholder="Contraseña">

            <v-btn @click="login">Login</v-btn>

        </div>

    </v-list>
  </v-card>
</template>


<script>
export default
{
    data: () => ({
        usuario: "",
        password:"",
        mensaje: "No estoy logueado",
    }),
    methods:
    {
        login: function()
        {
           this.$router.push({ name: "Home"})
        }
    } 
}
</script>