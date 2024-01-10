<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const selectedCategory = ref("All");

    const projects = reactive([
      { title: "Finance", category: "Web development", image:"https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg" },
      { title: "Orizon", category: "Web development", image: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg" },
      { title: "Fundo", category: "Web design", image: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-3.jpg" },

    ]);

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
      <ul class="filter-list">
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
      </ul>
     

      <ul class="project-list">
        <li
          v-for="project in projects"
          :key="project.title"
          :class="{ 'project-item': true, active: filterProjects(project) }"
          :data-category="project.category"
        >
          <a v-if="filterProjects(project)" href="#">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                :src="project.image"
                alt="finance"
                loading="lazy"
              />
            </figure>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-category">{{ project.category }}</p>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
