<template>
    <div>
      <header>
        <!-- Add any header content here -->
      </header>
  
      <main>
        <ContentQuery :path="path" :query="query" :slots="slots">
          <template v-slot="slotProps">
            <!-- Render the content from the markdown file -->
            <div v-html="slotProps.content"></div>
          </template>
        </ContentQuery>
      </main>
  
      <footer>
        <!-- Add any footer content here -->
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        path: this.$route.path,
        query: {
          // Add any additional query options here
        },
        slots: {
          default: 'content',
        },
      };
    },
  };
  </script>