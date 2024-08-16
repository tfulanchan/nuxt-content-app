<script setup>
const { navigation } = useContent();
</script>
<template>
  <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
    <!-- <div
      class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16"
    >
    <div> -->
    <div>
      <nav>
        <ul>
          <li class="font-semibold flex items-center gap-1 hover:text-primary" v-for="nav in navigation"
            :key="nav._path">
            <NuxtLink :to="nav._path">
              {{ nav.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="relative z-20 prose prose-slate mt-8 dark:prose-dark">
        <div class="container">
          <div class="content">
            <NuxtPage />
            <QuizResultsClient v-if="!hideComponent" />            
          </div>
          <BlogPost />
        </div>
      </div>
    </div>
    <br />
    <!-- <Right /> -->
    <!-- <Footer /> -->
  </div>
</template>
<script>
import BlogPost from "./components/content/BlogPost.vue";
import QuizResultsClient from "./components/content/QuizResults.client.vue";
export default {
  computed: {
    hideComponent() {
      // Check if the current route path is the home page
      return this.$route.path === '/' || this.$route.path === '/gmat' || this.$route.path === '/gre';
    }
  }
}
import usePageTitle from '@/composables/usePageTitle'
usePageTitle('Home')
</script>

<style scoped>
.container {
  /* max-width: 580px; */
  margin: 0 auto;
}

.content {
  padding: 1rem;
  margin-bottom: 10px;
}

nav ul {
  display: flex;
  justify-content: center;
  padding: 0;
}

nav ul li {
  list-style: none;
  margin: 0;
  padding: 2px 8px;
}
</style>
