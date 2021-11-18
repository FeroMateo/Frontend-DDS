<template>
  <v-card
    class="mx-auto"
    max-width="900"
  >
    <v-toolbar
      color="#FFEEBD"
    >
      <v-toolbar-title>Registrarse</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-list three-line>
            <input type="text" v-model="usuario" placeholder="Usuario">

            <input type="text" v-model="email" placeholder="E-mail">
            
            <input type="password" v-model="password" placeholder="Contraseña">

            <input type="password" v-model="repassword" placeholder="Repetir Contraseña">

            <v-btn @click="login">Signin</v-btn>
    </v-list>
  </v-card>
</template>


<script>
export default
{
    data: () => ({
        usuario: "",
        password:"",
        email:"",
        repassword:"",

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