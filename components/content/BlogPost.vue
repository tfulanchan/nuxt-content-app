<script setup>
const { next, prev } = useContent();
</script>
<template>
  <div class="container">
    <div class="content">
      <slot />
    </div>
    <!-- <div v-if="prev" class="next-link">
      <div>Read prev post</div>
      <NuxtLink :to="prev._path">
        {{ prev.title }}
      </NuxtLink>
      <p>{{ prev.description }}</p>
    </div>
    <div v-if="next" class="next-link">
      <div>Read next post</div>
      <NuxtLink :to="next._path">
        {{ next.title }}
      </NuxtLink>
      <p>{{ next.description }}</p>
    </div> -->

    <!-- <div v-if="!next">
      <div class="border-red-500 bg-red-100">This is the last post</div>
    </div>
    <div v-if="!prev">
      <div class="border-blue-500 bg-blue-100">This is the first post</div>
    </div> -->

    <!-- <div v-if="prev" class="start-0 next-link">
      <div class="absolute bottom-3 left-0 h-16 w-16">
        <NuxtLink :to="prev._path">
          {{ prev.title }}
        </NuxtLink>
        <p>{{ prev.description }}</p>
      </div>
    </div>
    <div v-if="next" class="end-0 next-link">
      <div class="absolute bottom-3 right-0 h-16 w-16">
        <NuxtLink :to="next._path">
          {{ next.title }}
        </NuxtLink>
        <p>{{ next.description }}</p>
      </div>
    </div> -->
    <div>
      <div class="grid grid-cols-2 gap-4 mt-1 p-2">
        <div v-if="prev">
          <NuxtLink
            :to="prev._path"
            class="block p-4 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
          >
            <p
              class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 mb-1"
            >
              Previous
            </p>
            <p
              class="font-medium text-gray-900 dark:text-white text-[15px] mb-1"
            >
              {{ prev.title }}
            </p>
          </NuxtLink>
        </div>
        <div v-if="!prev">
          <a
            href="#"
            class="cursor-not-allowed block p-4 border not-prose rounded-lg border-gray-200 dark:border-gray-800 dark:hover:bg-gray-800/50 group"
          >
            <p
              class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 mb-1"
            >
              Previous
            </p>
            <p
              class="font-medium text-gray-900 dark:text-white text-[15px] mb-1"
            >
              /
            </p>
          </a>
        </div>
        <div v-if="next">
          <NuxtLink
            :to="next._path"
            class="block p-4 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group text-right"
          >
            <p
              class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 mb-1"
            >
              <!-- {{ next.description }} -->
              Next
            </p>
            <p
              class="font-medium text-gray-900 dark:text-white text-[15px] mb-1"
            >
              {{ next.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* max-width: 580px; */
  margin: 0 auto;
}
.content {
  padding: 1rem;
  margin-bottom: 10px;
}
.next-link {
  /* margin-top: 16px; */
  text-align: center;
}
.next-link a {
  color: black;
  font-weight: 900;
  font-size: 1.2rem;
}
.next-link p {
  margin: 4px;
  color: #b32f2f;
}
</style>
