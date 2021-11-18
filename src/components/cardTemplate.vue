<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 ml-4"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="200"
      :src=fotoSrc
    ></v-img>

    <v-card-title>{{ nombre }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>

      <div class="ml-3" v-for="n in cualidades" :key=n.cualidades>•{{ n }}</div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Edad aproximada: {{edadAprox}} años</v-card-title>

    <v-card-text>
      
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="green lighten-2"
        text
        @click='aprobar()'
      >
        Aprobar
      </v-btn>
      <v-btn
        color="red lighten-2"
        text
        @click="rechazar()"
      >
        Rechazar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default
{

    data: () => ({
        fotoSrc: 'https://ahseeit.com/spanish/king-include/uploads/2021/06/thumb_177002455_174685791182813_3055252107994467567_n-9980661562.jpg',
        cualidades:['bajito','feo','comecaca','lindo','morocho'],
        nombre:'Gatito',
        edadAprox:'2',
    }),
    methods:
    {
        aprobar: function()
        {
            console.log('aprobo')
        },
        rechazar: function()
        {
            console.log('rechazo')
        }
    } 
}
</script>