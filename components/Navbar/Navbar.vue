<template>
  <nav class="flex items-center justify-between px-16 py-6 bg-white p-2 max-lg:px-4">
    <nuxt-link to="/">
      <img
        width="100"
        height="100"
        class="object-cover"
        src="/img/logo.png"
        alt=""
      />
    </nuxt-link>

    <div class="flex items-center gap-5 p-6 max-lg:hidden">
      <nuxt-link class="subnavlink" to="/ortodoncia">Ortodoncia</nuxt-link>
      <nuxt-link class="subnavlink" to="/blanqueamiento"
        >Blanqueamiento</nuxt-link
      >
      <nuxt-link class="subnavlink" to="/implantes">Implantes</nuxt-link>
      <nuxt-link class="subnavlink" to="/servicios">Servicios</nuxt-link>
      <nuxt-link class="subnavlink" to="/blog">Blog</nuxt-link>
      <nuxt-link class="subnavlink" to="/ubicacion">Ubicación</nuxt-link>
    </div>

    <a
      href="https://api.whatsapp.com/send?phone=573137256806"
      target="_blank"
      class="bg-primary text-white rounded-2xl hover: px-4 py-3"
      >Pedir cita</a
    >
  </nav>
</template>

<style lang="css">
.subnavlink:hover {
  text-decoration: underline;
}

.router-link-active.subnavlink {
  text-decoration: underline;
}
</style>
