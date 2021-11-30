<template>
  <v-card class="mx-auto" max-width="400">
    <v-toolbar color="#FFEEBD">
      <v-toolbar-title>Formulario de adopción</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-form v-model="valid">
      <div id="appVue">
        <v-container>
          <v-col cols="auto" md="4">
            <v-select
              v-model="especie"
              :items="opciones_especie"
              label="Especie"
              required
            ></v-select>
          </v-col>

          <v-col cols="auto" md="4">
            <v-select
              v-model="tamanio"
              :items="opciones_tamanio"
              label="tamaño"
              required
            ></v-select>
          </v-col>

          <v-col cols="auto" md="4">
            <v-text-field
              v-model="password"
              :items="opciones_tamanio"
              label="tiene"
              required
            ></v-text-field>
          </v-col>

          <v-btn @click="publicAdoption">Enviar</v-btn>
        </v-container>
      </div>
    </v-form>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
        opciones_especie: ['Perro', 'Gato', 'Hamster'],
        opciones_tamanio: ['Chico', 'Mediano', 'Grande'],
      dialog: false,
    }),
  }
</script>