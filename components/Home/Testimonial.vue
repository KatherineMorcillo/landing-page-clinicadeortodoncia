<template>
  <div class="flex justify-center items-center gap-4 p-6">
    <div class="w-1/2">
      <h1 class="flex justify-center text-6xl">{{ title }}</h1>
      <p class="flex justify-center">{{ paragraph }}</p>
    </div>
    <div class="w-1/4">
      <img :src="img" alt="" />
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
