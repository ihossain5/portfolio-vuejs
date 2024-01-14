<template>
    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <i class="fa-solid fa-book-open"></i>
        </div>
  
        <h3 class="h3">Experience</h3>
      </div>
  
      <ol class="timeline-list">
        <li v-if="loading" class="timeline-item" key="skeleton-loader">
          <content-loader
            :animate="true"
            :speed="1"
            :width="'100%'"
            :height="110"
            :view-box="'0 0 800 110'"
            primary-color="#5e5c5c"
            :secondary-color="'hsl(240, 2%, 12%)'"
            
          >
          <rect x="10" y="10" rx="5" ry="5" width="200" height="20" />
          <rect x="590" y="10" rx="5" ry="5" width="200" height="20" />
          <rect x="10" y="40" rx="5" ry="5" width="100" height="20" /> 
          <rect x="10" y="70" rx="5" ry="5" width="700" height="40" />
          </content-loader>

          <content-loader
          style="margin-top: 50px;"
            :animate="true"
            :speed="1"
            :width="'100%'"
            :height="110"
            :view-box="'0 0 800 110'"
            primary-color="#5e5c5c"
            :secondary-color="'hsl(240, 2%, 12%)'"
            
          >
          <rect x="10" y="10" rx="5" ry="5" width="200" height="20" />
          <rect x="590" y="10" rx="5" ry="5" width="200" height="20" />
          <rect x="10" y="40" rx="5" ry="5" width="100" height="20" /> 
          <rect x="10" y="70" rx="5" ry="5" width="700" height="40" />
          </content-loader>
          
        </li>
  
        <li v-else v-for="jobData in jobExperiences" :key="jobData.id" class="timeline-item">
          <div class="timeline-item-header">
            <h4 class="h4 timeline-item-title">{{ jobData.company_name }}</h4>
            <p class="h4 timeline-item-title">{{ jobData.start_date }} - {{ jobData.end_date }}</p>
          </div>
          <span>{{ jobData.designation }}</span>
  
          <p class="timeline-text">
            {{ jobData.responsibilities }}
          </p>
        </li>
      </ol>
    </section>
  </template>
  
  <script setup>
  import apiClient from "@/axios";
  import { onMounted, ref } from "vue";
  import { ContentLoader } from 'vue-content-loader';
  
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
    },1000);
  });
  </script>
  
<style scoped>
.timeline-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 768px) {
  .timeline-list {
    /* Add specific styling for smaller screens if needed */
  }

  /* Adjust the responsive styles for the content loader */
  .timeline-item content-loader rect {
    /* Example adjustments, customize as needed */
    x: 5%;
    width: 90%;
  }
}

</style>