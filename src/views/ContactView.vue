<script setup>
import apiClient from "@/axios";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const isSending = ref(false);
const showToast = ref(false);

const sendMessage = async () => {
  try {
    isSending.value = true;

    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    const response = await apiClient.post("/send-message", data);

    name.value = "";
    email.value = "";
    message.value = "";
    showToast.value = true;
  } catch (error) {
    alert('something went wrong!please try again later')
    console.error("Error sending message:", error);
  } finally {
    isSending.value = false;
  }
};

const closeToast = () => {
  showToast.value = false;
};
</script>

<template>
  <article class="contact" data-page="contact">
    <header>
      <h2 class="h2 article-title">Contact</h2>
    </header>

    <section class="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29215.216731341854!2d90.40347139999999!3d23.750870600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad339cb5%3A0x20c70986185ad2ba!2sMogbazar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1704870552033!5m2!1sen!2sbd"
          width="600"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
    </section>

    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <form @submit.prevent="sendMessage" class="form" data-form>
        <div class="input-wrapper">
          <input
            v-model="name"
            type="text"
            name="name"
            class="form-input"
            placeholder="Full name"
            required
            data-form-input
          />

          <input
            v-model="email"
            type="email"
            name="email"
            class="form-input"
            placeholder="Email address"
            required
            data-form-input
          />
        </div>

        <textarea
          v-model="message"
          name="message"
          class="form-input"
          placeholder="Your Message"
          required
          data-form-input
        ></textarea>

        <button
          class="form-btn"
          type="submit"
          :disabled="isSending"
          data-form-btn
        >
          <i class="fa-regular fa-paper-plane"></i>
          <span>Send Message</span>
        </button>
      </form>
      <div class="toast" v-show="showToast" :class="{ show: showToast }">
        <span>Success! Your message has been sent.</span>
        <span class="close-icon" @click="closeToast">&#10006;</span>
      </div>
    </section>
  </article>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #1e8337;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toast .close-icon {
  cursor: pointer;
  color: #fff;
  align-self: flex-start;
  margin-left: 10px;
}

.toast.show {
  opacity: 1;
}

@media screen and (max-width: 600px) {
  .toast {
    width: 100%;
    right: 0;
    left: 0;
    border-radius: 0;
  }
}
</style>