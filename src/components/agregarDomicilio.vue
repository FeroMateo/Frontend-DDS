<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Agregar Domicilio
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Agregar Domicilio</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Calle"
                  required
                  v-model="calleDomicilio"
                  @keyup="$emit('update:calleDomicilio', calleDomicilio)"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Altura"
                  v-model="alturaDomicilio"
                  @keyup="$emit('update:alturaDomicilio', alturaDomicilio)"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Piso"
                  required
                  v-model="pisoDomicilio"
                  @keyup="$emit('update:pisoDomicilio', pisoDomicilio)"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Departamento"
                  required
                  v-model="departamentoDomicilio"
                  @keyup="$emit('update:departamentoDomicilio', departamentoDomicilio)"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>