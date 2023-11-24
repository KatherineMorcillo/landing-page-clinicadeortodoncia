<template>
  <div class="flex justify-center items-center gap-4 p-6 mb-14">
    <div
      class="w-1/2 p-6 border-2 rounded-full border-success shadow-lg hover:bg-success"
    >
      <h1 class="flex justify-center text-4xl font-bold">{{ title }}</h1>
      <p class="flex justify-center">{{ paragraph }}</p>
    </div>
    <div class="w-1/4">
      <img width="300" height="300" class="rounded-full" :src="img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    paragraph: String,
    img: String,
  },
};
</script>
