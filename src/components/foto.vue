<template>
<div>
    <div class="d-flex flex-column justify-space-between align-center">
    <v-img
      max-width="200"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
        </div>
    <div>
    <v-responsive
      max-width="400"
      class="mx-auto mb-4"
    >
    Preguntas:
    </v-responsive>

    <v-card
      elevation="16"
      max-width="500"
      class="mx-auto"
    >
      <v-virtual-scroll
        :bench="benched"
        :items="items"
        height="400"
        item-height="100"
      >
        <template v-slot:default="{ item }">
          <v-list-item :key="item">
            <v-list-item-content>
              <v-list-item-title>
                Pregunta:<strong>{{ item }}, {{pregunta}}</strong>
                <v-text-field label="Escribe" required>

                </v-text-field>
              </v-list-item-title>
              
            </v-list-item-content>

          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-virtual-scroll>
    </v-card>
  </div>

  <v-btn
        class="align-center"
        outlined
        rounded
        text
        @click="darEnAdopcion"
      >
        Dar en adopcion
      </v-btn>

</div>

</template>
<script>
  export default {
    data: () => ({
      benched:3,
    }),
    computed: {
      items () {
        return Array.from({length: 4})
      },
    },
    methods:
    {
        darEnAdopcion: function() {
            this.$router.push({ name: "Home"})
        }
    }
  }
</script>