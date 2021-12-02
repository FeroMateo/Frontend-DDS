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
          class="mt-8"
        >
          Agregar Mascota
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Agregar Mascota</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Descripcion"
                  required
                  v-model="descripcionMascota"
                  @keyup="$emit('update:descripcionMascota', descripcionMascota)"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
               <v-file-input
                label="Agregar Fotos"
                filled
                prepend-icon="mdi-camera"
                v-model="fotoMascota"
              ></v-file-input>
              <v-select
                  :items="especies"
                  label="Especie Animal"
                  required
                  v-model="especieAnimalMascota"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Latitud"
                  required
                  v-model="latitudMascota"
                  @keyup="$emit('update:latitudMascota', latitudMascota)"
                ></v-text-field>
                <v-text-field
                  label="Longitud"
                  required
                  v-model="longitudMascota"
                  @keyup="$emit('update:longitudMascota', longitudMascota)"
                ></v-text-field>
                <v-text-field
                  label="Direccion"
                  required
                  v-model="direccionMascota"
                  @keyup="$emit('update:direccionMascota', direccionMascota)"
                ></v-text-field>
                <location-picker :place.sync="place"></location-picker>
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
      especies:["GATO","PERRO"],
    }),
    components:
    {
    },
    methods:
    {
      subirFoto: function (file) {
                this.getBase64(file)
                    .then(img => {
                        var request = {
                            //nombre: file.name,
                            contenidoBase64: img
                        }
                        console.dir(request)
                        this.$emit('update:fotoMascota', request)

                    })
            },
            getBase64: function (file) {
                return new Promise((resolve, reject) => {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        resolve(reader.result)
                    };
                    reader.onerror = function (error) {
                        reject('Error: ', error);
                    }
                })
            },
      finalizar: function() 
      {
        this.$emit('update:especieAnimalMascota', this.especieAnimalMascota)
        this.subirFoto(this.fotoMascota)
        this.dialog = false
      },
    }
  }
</script>