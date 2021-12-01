<template>
    <v-card
        elevation="4"
        outlined
        shaped
    >
    <input type="text" v-model="nombre" placeholder="Nombre">
    <input type="text" v-model="apellido" placeholder="Apellido">
    <input type="text" v-model="fechaNac" placeholder="Fecha de Nacimento">
    <input type="text" v-model="tipoDoc" placeholder="Tipo de documento">
    <input type="text" v-model="nroDoc" placeholder="Numero de documento">
    <input type="text" v-model="telefono" placeholder="Numero de telefono">
    <input type="text" v-model="email" placeholder="E-Mail">
    <v-row align="center">
    <v-col cols="12">
      <v-select
        :items="items"
        :menu-props="{ top: true, offsetY: true }"
        label="Label"
      ></v-select>
    </v-col>
   <!--AGREGAR CONTACTO-->
  </v-row>
    
    </v-card>
</template>

<script>
  export default {
    data: () => ({

      nombre1:"",
      apellido:"",

      items: ['WP','MAIL','SMS'],
    }),
    methods:
    {
      emitirNombre: function() {

          this.$emit('update:nombre',this.nombre1) 
      },
    }
  }
</script>