<script setup>
import apiClient from "@/axios";
import { onMounted, ref } from "vue";
import { ContentLoader } from "vue-content-loader";
import sharedState from "@/store";

const data = sharedState.data;
const error = sharedState.error;
const loading = sharedState.loading;
const isButtonActive = ref(false);

const fetchData = async () => {
  try {
    const response = await apiClient.get("/info");
    data.value = response.data.data;
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

const toggle = () => {
  isButtonActive.value = !isButtonActive.value;
};

onMounted(() => {
    fetchData();
});
</script>

<template>
  <aside class="sidebar" :class="{ active: isButtonActive }" data-sidebar>
    <content-loader
      v-if="loading"
      :speed="2"
      :width="450"
      :height="600"
      :viewBox="'10 100 450 600'"
      primary-color="#5e5c5c"
      :secondary-color="'hsl(240, 2%, 12%)'"
    >
      <!-- Circle -->
      <circle cx="130" cy="147" r="47" />

      <!-- First Rectangle -->
      <rect x="50" y="207" rx="0" ry="0" width="160" height="15" />

      <!-- Second Rectangle -->
      <rect x="80" y="236" rx="0" ry="0" width="92" height="15" />

      <!-- Separator Line -->
      <rect x="10" y="270" rx="0" ry="0" width="430" height="2" />

      <!-- Email Icon -->
      <rect x="10" y="280" rx="0" ry="0" width="20" height="20" />
      <!-- Phone Icon -->
      <rect x="10" y="310" rx="0" ry="0" width="20" height="20" />
      <!-- Phone_2 Icon -->
      <rect x="10" y="340" rx="0" ry="0" width="20" height="20" />
      <!-- Location Icon -->
      <rect x="10" y="370" rx="0" ry="0" width="20" height="20" />

      <!-- Email Text -->
      <rect x="40" y="280" rx="0" ry="0" width="200" height="20" />
      <!-- Phone Text -->
      <rect x="40" y="310" rx="0" ry="0" width="200" height="20" />
      <!-- Phone_2 Text -->
      <rect x="40" y="340" rx="0" ry="0" width="200" height="20" />
      <!-- Location Text -->
      <rect x="40" y="370" rx="0" ry="0" width="200" height="20" />

      <div class="separator"></div>

      <!-- GitHub Icon -->
      <rect x="100" y="400" rx="0" ry="0" width="20" height="20" />
      <!-- LinkedIn Icon -->
      <rect x="130" y="400" rx="0" ry="0" width="20" height="20" />
    </content-loader>

    <div v-else>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img :src="data.photo" alt="Richard hanrick" width="80" />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Richard hanrick">{{ data.name }}</h1>

          <p class="title">{{ data.designation }}</p>
        </div>

        <button class="info_more-btn" data-sidebar-btn @click="toggle">
          <span>Show Contacts</span>

          <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <i class="fa-solid fa-envelope"></i>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a :href="'mailto:' + data.email" class="contact-link">{{
                data.email
              }}</a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <i class="fa-solid fa-phone"></i>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+88{{ data.phone }}" class="contact-link"
                >+88{{ data.phone }}</a
              >
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <i class="fa-solid fa-phone"></i>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+88{{ data.phone_2 }}" class="contact-link"
                >+88{{ data.phone_2 }}</a
              >
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <i class="fa-solid fa-location-dot"></i>
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>{{ data.address }}</address>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          <li class="social-item">
            <a href="https://github.com/ihossain5" target="blank" class="social-link">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>

          <li class="social-item">
            <a href="https://www.linkedin.com/in/ismail-hossain5169" class="social-link" target="blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

