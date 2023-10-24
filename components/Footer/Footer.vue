<template>
  <footer class="flex flex-col justify-center mx-auto bg-white">
    <div class="flex justify-center gap-5 bg-white p-6">
      <img width="100" height="100" alt="" src="/img/logo.png" />
      <h3 class="p-4">Clinica odontologica</h3>
    </div>
    <div class="grid grid-cols-4 p-6">
      <div class="">
        <h3>Servicios</h3>
        <li>
          <nuxt-link to="/"> Ortodoncia</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Blanqueamiento</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Implantes</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Otros Servicios</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Blog</nuxt-link>
        </li>
      </div>
      <div class="">
        <h3>Ubicación</h3>
      </div>

      <div class="">
        <h3>Contactanos</h3>
      </div>

      <div class="">
        <h3>Redes Sociales</h3>
      </div>
    </div>
  </footer>
</template>
