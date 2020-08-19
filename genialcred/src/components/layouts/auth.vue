<template>
  <v-app class="primary split-bg">
    <v-main class="primary">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 lg4>
            <router-view :key="$route.path"></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
