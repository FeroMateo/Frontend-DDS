<template>
  <div class="text-center">
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="#FFDE81"
      @click="loader = 'loading'"
    >
      Actualizar Datos
    </v-btn>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="#FFDE81"
      @click="loader = 'loading'"
    >
      Cargar Foto
    </v-btn>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="#FFDE81"
      @click="loader = 'loading'"
    >
      Solicitar Autorizacion
    </v-btn>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="#FFDE81"
      @click="loader = 'loading'"
    >
      Reporte listado personas
    </v-btn>
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="#FFDE81"
      @click="loader = 'loading'"
    >
      Reporte listado delegaciones
    </v-btn>
  </div>
</template>