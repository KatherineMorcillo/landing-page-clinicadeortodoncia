<template>
  <div class="flex flex-col items-center hover:border gap-4 p-10">
    <img
      width="150"
      height="150"
      class="object-cover max-h-[150px] my-auto items-center rounded-full"
      :src="img"
      alt=""
    />

    <h1 class="font-bold">{{ title }}</h1>
    <p class="text-justify">{{ paragraph }}</p>
    <a
      href="/"
      class="flex items-center bg-primary text-white font-bold border rounded-full hover:bg-success p-4 gap-4 uppercase"
    >
      <img width="20" height="20" src="/img/iconlogo.png" />
      Reserva Ya
    </a>
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
