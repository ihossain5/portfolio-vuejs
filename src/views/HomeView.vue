<script setup>
import apiClient from "@/axios";
import { onMounted, ref } from "vue";

const jobExperiences = ref({});
const error = ref(null);
const loading = ref(true);



const fetchExperienceData = async () => {
  try {
    const response = await apiClient.get("/job-experience");
    jobExperiences.value = response.data;
  } catch (e) {
    error.value = e;
  }finally {
    loading.value = false;
  }
};

onMounted( () => {
  setTimeout(() => {
   fetchExperienceData();
});
});

</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>

    <section class="about-text">
      <p>
        
      </p>

      <p>
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way. I created web design for many famous brand companies.
      </p>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <i class="fa-solid fa-book-open"></i>
        </div>

        <h3 class="h3">Experience</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item" v-for="jobData in jobExperiences" :key="jobData.id">
          <h4 class="h4 timeline-item-title">{{ jobData.company_name }} 
            <p class="job-date"> {{ jobData.start_date }} - {{ jobData.end_date }}</p>
          </h4>         
          <span>{{jobData.designation}}</span>

          <p class="timeline-text">
            {{ jobData.responsibilities }}
          </p>
        </li>


      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <i class="fa-solid fa-book-open"></i>
        </div>

        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Bsc in Computer Science & Engineering
          </h4>

          <span>University of Development Alternative</span>
          <span>2015 — 2019</span>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Higher Secondary School Certificate(HSC)
          </h4>
          <span>Motijheel Government Boys' High School</span>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Secondary School Certificate (SSC)
          </h4>

          <span>T & T High School</span>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">My skills</h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Web design</h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%"></div>
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.job-date{
  margin-top: 7px;
}
</style>