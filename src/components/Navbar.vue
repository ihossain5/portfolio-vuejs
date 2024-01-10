<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <router-link to="/" class="navbar-link" data-nav-link :class="{ 'active': isActive('/') }">Home</router-link>
      </li>

      <li class="navbar-item">
        <router-link to="/portfolio" class="navbar-link" :class="{ 'active': isActive('/portfolio') }" data-nav-link>Portfolio</router-link>
      </li>

      <li class="navbar-item">
        <router-link to="/contact" class="navbar-link" :class="{ 'active': isActive('/contact') }" data-nav-link>Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>