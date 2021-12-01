<template>
  <v-autocomplete
  rounded
  solo
  chips
  label="Seleccionar Mascota"
  :items="mascotas"
  ></v-autocomplete>
</template>

<script>

  export default {
    data: () => ({
      mascotas: ['alan','teo']
    }),
    components:
    {
    },
  }
</script>