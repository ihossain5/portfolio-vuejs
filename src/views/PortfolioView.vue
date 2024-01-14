<script>
import { ref, onMounted } from "vue";
import apiClient from "@/axios";


export default {
  setup() {
    const selectedCategory = ref("All");

    const projects = ref({});
    const error = ref(null);
    const loading = ref(true);


    const fetchData = async () => {
      try {
        const response = await apiClient.get("/projects");
        projects.value = response.data.data;
      } catch (e) {
        error.value = e;
      } finally {
        loading.value = false;
      }
    };


    onMounted(() => {
      setTimeout(() => {
        fetchData();
      });
    });

    const selectCategory = (category) => {
      selectedCategory.value = category;
    };

    const filterProjects = (project) => {
      return (
        selectedCategory.value === "All" ||
        project.category === selectedCategory.value
      );
    };

    return {
      selectedCategory,
      projects,
      selectCategory,
      filterProjects,
    };
  },
};
</script>


<template>
  <article class="portfolio" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>

    <section class="projects">
      <!-- <ul class="filter-list">
        <li
          v-for="category in [
            'All',
            'Web design',
            'Applications',
            'Web development',
          ]"
          :key="category"
          class="filter-item"
        >
          <button
            :class="{ active: selectedCategory === category }"
            @click="selectCategory(category)"
            data-filter-btn
          >
            {{ category }}
          </button>
        </li>
      </ul> -->

      <ul class="project-list">
        <li
          v-for="project in projects"
          :key="project.title"
          :class="{ 'project-item': true, active: filterProjects(project) }"
          :data-category="project.category"
        >
          <a v-if="filterProjects(project)" :href=" project.url" target="blank">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <i class="fa-regular fa-eye"></i>
              </div>

              <img :src="project.cover_photo" alt="finance" loading="lazy" />
            </figure>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-category">{{ project.description }}</p>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
