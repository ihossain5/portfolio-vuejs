<script setup>
import apiClient from "@/axios";
import { onMounted, ref } from "vue";

const data = ref({});
const error = ref(null);
const loading = ref(true);
const isButtonActive = ref(false);

const fetchData = async () => {
  try {
    const response = await apiClient.get("/info");
    data.value = response.data;
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
  setTimeout(() => {
    fetchData();
  });
});
</script>

<template>
  <aside class="sidebar" :class="{ active: isButtonActive }" data-sidebar>
    <div v-if="loading" class="loading-skeleton">
      <div class="loading-avatar"></div>
      <div class="loading-info-content">
        <div class="loading-name"></div>
        <div class="loading-title"></div>
      </div>
      <div class="loading-btn"></div>
    </div>

    <div class="sidebar-info" v-else>
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
          <a href="#" class="social-link">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

