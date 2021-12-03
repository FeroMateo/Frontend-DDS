<template>
  <v-card
    class="mx-auto"
    max-width="800"
    outlined
    elevation="8"
    shaped
    
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>BIENVENID@S A RESCATE DE PATITAS!!!</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-row>
        <v-col>
<v-btn
        outlined
        rounded
        text
        @click="push_login"
      >
        Iniciar Sesion
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        @click="push_signup"
      >
        Registrarse
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        @click="push_quiero_adoptar"
      >
        Quiero Adoptar
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        @click="push_mascotas_totales"
      >
        Mascotas sin dueño
      </v-btn>
        </v-col>
        <v-btn
        outlined
        rounded
        text
        @click="push_dar_en_adopcion"
      >
        Dar en adopción
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        @click="push_encontre_mascota"
      >
        Encontre una mascota
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        @click="push_registrar_mascota"
      >
        Registrar mascota
      </v-btn>
      <v-btn
        outlined
        rounded
        text
        @click="push_mascotas"
      >
        Mascotas para aprobar
      </v-btn>
      </v-row>
      
      
    </v-card-actions>
  </v-card>
</template>

<script>
export default
{
    data: () => ({
    }),
    methods:
    {
        push_login: function()
        {
           this.$router.push({ name: "Login"})
        },
        push_signup: function()
        {
           this.$router.push({ name: "Signin"})
        },
        push_quiero_adoptar: function()
        {
           this.$router.push({ name: "QuieroAdoptar"})
        },
        push_mascotas_totales: function()
        {
           this.$router.push({ name: "MascotasRescatadasTotales"})
        },
        push_dar_en_adopcion: function()
        {
           this.$router.push({ name: "DarEnAdopcion"})
        },
        push_encontre_mascota: function()
        {
           this.$router.push({ name: "EncontreMascota"})
        },
        push_registrar_mascota: function()
        {
           this.$router.push({ name: "RegistrarMascota"})
        },
        push_mascotas: function()
        {
           this.$router.push({ name: "MascotasRescatadas"})
        },
    } 
}
</script>
