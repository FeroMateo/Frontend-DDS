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
          Agregar Persona
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Agregar Persona</span>
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
                  v-model="nombrePersona"
                  @keyup="$emit('update:nombrePersona', nombrePersona)"
                ></v-text-field>
                <v-text-field
                  label="Telefono"
                  v-model="telefonoPersona"
                  @keyup="$emit('update:telefonoPersona', telefonoPersona)"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Apellido"
                  v-model="apellidoPersona"
                  @keyup="$emit('update:apellidoPersona', apellidoPersona)"
                ></v-text-field>
                <v-text-field
                  label="Fecha Nacimiento"
                  type="date"
                  required
                  v-model="fechaPersona"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  required
                  v-model="emailPersona"
                  @keyup="$emit('update:emailPersona', emailPersona)"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Tipo Documento"
                  required
                  v-model="tipoDocumentoPersona"
                  @keyup="$emit('update:tipoDocumentoPersona', tipoDocumentoPersona)"
                ></v-text-field>
                <v-text-field
                  label="Numero Documento"
                  required
                  v-model="numeroDocumentoPersona"
                  @keyup="$emit('update:numeroDocumentoPersona', numeroDocumentoPersona)"
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
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="botonGrande"
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
      botonGrande: function() 
      {
       this.$emit('update:idsFormaNotificacionContacto', this.idsFormaNotificacionContacto);
       this.$emit('update:fechaPersona', this.fechaPersona);
      }
    }
  }
</script>