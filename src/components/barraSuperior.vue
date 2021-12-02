<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <span class="group pa-2">
        <v-btn icon>
          <v-icon x-large>mdi-home</v-icon>
        </v-btn>
      </span>

      <v-img  max-width="33%" src="https://utn.edu.ar/images/logo-utn.png"></v-img>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 120px;"></v-container>
    </v-sheet>
  </v-card>
</template>