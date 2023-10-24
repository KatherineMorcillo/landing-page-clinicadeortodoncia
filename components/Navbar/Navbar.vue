<template>
  <nav
    class="flex items-center justify-between px-16 py-6 bg-white p-2 max-lg:px-4"
  >
    <!-- Imagen de logo  -->
    <nuxt-link to="/">
      <img
        width="100"
        height="100"
        class="object-cover"
        src="/img/logo.png"
        alt=""
      />
    </nuxt-link>

    <!-- Opciones para navegar en el navbar -->
    <div
      class="flex items-center gap-5 p-6 max-lg:hidden"
      :class="{ 'menu-responsive': openMenu && widthWindows < 1024 }"
    >
      <button class="close-responsive hidden" @click="abrirMenu">
        <img width="50" heigth="50" src="/img/icons/cerrar_menu.png" />
      </button>
      <nuxt-link class="subnavlink" to="/ortodoncia">Ortodoncia</nuxt-link>
      <nuxt-link class="subnavlink" to="/blanqueamiento"
        >Blanqueamiento</nuxt-link
      >
      <nuxt-link class="subnavlink" to="/implantes">Implantes</nuxt-link>
      <nuxt-link class="subnavlink" to="/servicios">Servicios</nuxt-link>
      <nuxt-link class="subnavlink" to="/blog">Blog</nuxt-link>
      <nuxt-link class="subnavlink" to="/ubicacion">Ubicación</nuxt-link>
    </div>

    <!-- Botón navegador para pantallas pequeñas (adaptación de la imagen sin pixelar:object-cover-->
    <div class="block lg:hidden">
      <button>
        <img
          width="40"
          height="40"
          class="object-cover"
          src="/img/barramenu.png"
          alt=""
          @click="abrirMenu"
        />
      </button>
    </div>

    <!-- Botón : pedir cita -->
    <a
      href="https://api.whatsapp.com/send?phone=573137256806"
      target="_blank"
      class="bg-primary text-white rounded-2xl hover: px-4 py-3 max-lg:hidden"
      >Pedir cita</a
    >
  </nav>
</template>
<script setup>
const openMenu = ref(false);
const widthWindows = ref(null)
const abrirMenu = () => {
  openMenu.value = !openMenu.value;
};

onMounted(() => {
  window.addEventListener('resize', function () {
  widthWindows.value = window.innerWidth
})
})

</script>
<style lang="scss">
.subnavlink:hover {
  text-decoration: underline;
}

.router-link-active.subnavlink {
  text-decoration: underline;
}

.menu-responsive {
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background: #0ea8dc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  .close-responsive {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}

</style>
