<template>
    <v-card
        elevation="4"
        outlined
        shaped
    >
    <input type="text" v-model="nombre" placeholder="Nombre">
    <input type="text" v-model="apodo" placeholder="Apodo">
    <input type="text" v-model="edad" placeholder="Edad aproximada">
    <input type="text" v-model="sexo" placeholder="Sexo">
    <input type="text" v-model="descripcion" placeholder="Descripcion aproximada">

    <v-row align="center">
    <v-col cols="12">
      <v-select
        :items="items"
        :menu-props="{ top: true, offsetY: true }"
        label="Especie"
      ></v-select>
    </v-col>
    </v-row>
    <!--AGREGAR FOTO Y CARACTERISTICA-->
    
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: ['Gato','Perro','Chinchilla'],
    })
  }
</script>