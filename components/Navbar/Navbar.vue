<template>
  <nav
    class="fixed w-full flex items-center justify-between px-16 pt-6 bg-white p-2 max-lg:px-4 shadow-md"
  >
    <!-- Imagen de logo  -->
    <nuxt-link to="/">
      <img
        width="125"
        height="125"
        class="object-contain"
        src="/img/logo (3).png"
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
      <nuxt-link class="subnavlink" to="#nosotros">Nosotros</nuxt-link>
      <nuxt-link class="subnavlink" to="#servicios">Servicios</nuxt-link>
      <nuxt-link class="subnavlink" to="#testimonios">Testimonios</nuxt-link>
      <nuxt-link class="subnavlink" to="#citas">Citas y Contacto</nuxt-link>
      <nuxt-link class="subnavlink" to="#contacto">Ubicación</nuxt-link>
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
      class="btn-wp"
    >
      <img
        width="30"
        height="30"
        class="max-lg:hidden"
        src="/img/icons/whatsapp.png"
      />
      Pedir cita
    </a>
  </nav>
</template>
<script setup>
const openMenu = ref(false);
const widthWindows = ref(null);
const abrirMenu = () => {
  openMenu.value = !openMenu.value;
};

onMounted(() => {
  window.addEventListener("resize", function () {
    widthWindows.value = window.innerWidth;
  });
});
</script>
<style lang="scss">
.subnavlink {
  @apply uppercase text-[#4a5568] hover:text-primary;

  /* Para cuando queremos utilizar css puro &:hover {

  }*/
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
.btn-wp {
  @apply flex items-center border gap-4 text-letters uppercase rounded-full  p-2 max-lg:hidden hover:text-primary hover:border-primary;
}
</style>
