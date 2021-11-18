<template>
  <v-card
    class="mx-auto"
    max-width="820"
  >
    <v-toolbar
      color="#FFEEBD"
    >
      <v-toolbar-title>Autorizaciones Pendientes</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-list three-line>
      <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          AUTORIZACION PENDIENTE DE:
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        color="green"
        outlined
        rounded
        text
      >
        ACEPTAR
      </v-btn>
      <v-btn
      color="red"
        outlined
        rounded
        text
      >
        RECHAZAR
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          AUTORIZACION PENDIENTE DE:
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        color="green"
        outlined
        rounded
        text
      >
        ACEPTAR
      </v-btn>
      <v-btn
      color="red"
        outlined
        rounded
        text
      >
        RECHAZAR
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-list>
  </v-card>
</template>