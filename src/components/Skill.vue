<script setup>
import apiClient from "@/axios";
import { onMounted, ref } from "vue";
import { ContentLoader } from "vue-content-loader";

const skills = ref({});
const error = ref(null);
const loading = ref(true);

const fetchData = async () => {
  try {
    const response = await apiClient.get("/skills");
    skills.value = response.data.data;
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
    fetchData();
});
</script>

<template>
  <section class="skill">
    <h3 class="h3 skills-title">Skills</h3>

    <ul class="skills-list content-card">
      <li class="skills-item" v-if="loading">
        <content-loader
            :animate="true"
            :speed="1"
            :width="'100%'"
            :height="110"
            :view-box="'0 0 800 110'"
            primary-color="#5e5c5c"
            :secondary-color="'hsl(240, 2%, 12%)'"
            
          >
          <rect x="10" y="10" rx="5" ry="5" width="800" height="40" />

          </content-loader>
      </li>
      <li v-else class="skills-item" v-for="skill in skills" :key="skill.id">
        <div class="title-wrapper">
          <h5 class="h5">{{ skill.title }}</h5>
          <data :value="skill.value">{{skill.value}}%</data>
        </div>

        <div class="skill-progress-bg">
          <div class="skill-progress-fill" :style="{ width: skill.value + '%' }"></div>
        </div>
      </li>
    </ul>
  </section>
</template>