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
        <div class="text-overline mb-4">
          BIENVENID@S A LA RRP DE DISEÑO DE SISTEMAS 2021!
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
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
        }
    } 
}
</script>
