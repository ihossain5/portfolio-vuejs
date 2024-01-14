<script setup>
import apiClient from "@/axios";
import { onMounted, ref } from "vue";

const jobExperiences = ref({});
const error = ref(null);
const loading = ref(true);

const fetchExperienceData = async () => {
  try {
    const response = await apiClient.get("/job-experience");
    jobExperiences.value = response.data.data;
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  setTimeout(() => {
    fetchExperienceData();
  });
});
</script>
<template>
  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <i class="fa-solid fa-book-open"></i>
      </div>

      <h3 class="h3">Experience</h3>
    </div>

    <ol class="timeline-list">
      <li
        class="timeline-item"
        v-for="jobData in jobExperiences"
        :key="jobData.id"
      >
        <div class="timeline-item-header">
          <h4 class="h4 timeline-item-title">{{ jobData.company_name }}</h4>
          <p class="h4 timeline-item-title">
            {{ jobData.start_date }} - {{ jobData.end_date }}
          </p>
        </div>
        <span>{{ jobData.designation }}</span>

        <p class="timeline-text">
          {{ jobData.responsibilities }}
        </p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


</style>