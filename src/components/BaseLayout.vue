<script setup>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';

</script>

<template>
  <main>
    <!--- #SIDEBAR-->
    <Sidebar></Sidebar>
    <!--- #main-content-->
    <div class="main-content">
      <Navbar></Navbar>
      <slot></slot>
    </div>
  </main>
</template>