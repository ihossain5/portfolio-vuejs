<script setup>
import sharedState from "@/store";
import { ContentLoader } from "vue-content-loader";

const data = sharedState.data;
const loading = sharedState.loading;
</script>

<template>
  <header>
    <h2 class="h2 article-title">About me</h2>
  </header>

  <section class="about-text">
    <p v-if="loading">
      <content-loader
        :width="900"
        :height="180"
        :speed="2"
        primary-color="#5e5c5c"
        :secondary-color="'hsl(240, 2%, 12%)'"
        viewBox="80 40 900 180"
      >

        <rect x="114" y="52" rx="6" ry="6" width="900" height="15" />
        <rect x="116" y="105" rx="6" ry="6" width="820" height="15" />
        <rect x="115" y="158" rx="6" ry="6" width="883" height="15" />

      </content-loader>
    </p>
    <p v-else>
      {{ data.about }}
    </p>
  </section>
</template>

<style scoped>
</style>