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
          Agregar Contacto
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Agregar Contacto</span>
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
                  label="Nombre"
                  required
                  v-model="nombreContacto"
                  @keyup="$emit('update:nombreContacto', nombreContacto)"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Apellido"
                  v-model="apellidoContacto"
                  @keyup="$emit('update:apellidoContacto', apellidoContacto)"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  required
                  v-model="emailContacto"
                  @keyup="$emit('update:emailContacto', emailContacto)"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Telefono"
                  required
                  v-model="telefonoContacto"
                  @keyup="$emit('update:telefonoContacto', telefonoContacto)"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="[1,2,3]"
                  label="Forma de Notificacion"
                  required
                  v-model="idsFormaNotificacionContacto"
                  multiple
                ></v-select>
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
            @click="finalizar"
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
    methods:
    {
       finalizar: function() 
      {
        this.$emit('update:idsFormaNotificacionContacto', this.idsFormaNotificacionContacto)
        this.dialog = false
      },
    },
  }
</script>