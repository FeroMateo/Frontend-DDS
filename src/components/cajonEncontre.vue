<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            v-model="apellido"
            :rules="nameRules"
            :counter="10"
            label="Apellido"
            required
          ></v-text-field>
          <v-text-field
            v-model="fecha"
            :rules="nameRules"
            type="date"
            :counter="10"
            label="Fecha"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="tipo"
            :rules="nameRules"
            :counter="10"
            label="Tipo documento"
            required
          ></v-text-field>
          <v-text-field
            v-model="numDoc"
            :rules="nameRules"
            :counter="10"
            label="Numero de documento"
            required
          ></v-text-field>
          <v-text-field
            v-model="direccion"
            :rules="nameRules"
            :counter="10"
            label="Direccion"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        <agregar-contacto/>
        <agregar-mascota/>
        </v-col>
      </v-row>

        <v-btn
            depressed
            elevation="4"
            class="align-center"
        >Confirmar Publicacion</v-btn>

    </v-container>
  </v-form>
</template>

<script>

import AgregarContacto from '../components/agregarContacto.vue'
import AgregarMascota from '../components/agregarMascota.vue'
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    components:
    {
        AgregarContacto,
        AgregarMascota,
    },
  }
</script>