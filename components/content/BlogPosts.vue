<script setup>
const { data } = await useAsyncData(() => {
  return queryContent("/blog/").find();
});
</script>
<template>
  <div>
    <div v-for="post in data" :key="post._id" 
    class="max-w-md mx-auto bg-white hover:border hover:border-green-500 rounded-xl shadow-lg overflow-hidden md:max-w-2xl mb-5">
      <div  class="px-6 py-4">
      <h2 class="font-bold text-xl mb-2">{{ post.title }}</h2>
      <p class="text-gray-700 text-base">{{ post.description }}</p>
      <NuxtLink :to="post._path"> Read more ... </NuxtLink>
    </div>
    </div>
    <div 
    class="rounded shadow-lg overflow-hidden w-full max-w-full md:max-w-2xl mb-5">
      <!-- <img class="w-full" src="/img/image.jpg" alt="Sunset in the mountains" /> -->
      <div class="px-6 py-4">
        <h2 class="font-bold text-xl mb-2">The Coldest Sunset</h2>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap'); */

  .container {
    overflow: hidden;
    margin: 0px 0px 32px;
    padding: 0px 16px;
    /* padding: 2rem!important; */
    box-sizing: border-box;
    border-radius: var(--ifm-card-border-radius);
    border: 1px solid green;
    box-shadow: 0 1.5px 3px 0 #00000026;
    transition: all var(--ifm-transition-fast) ease;
    transition-property: border,box-shadow;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

</style>