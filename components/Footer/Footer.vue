<template>
  <footer class="flex justify-center items-center mx-auto gap-4">
    <div class="footer">
      <img
        width="100"
        height="100"
        class="object-contain"
        src="/img/logo1.png"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores
        dolorem provident quasi quis autem tempore inventore voluptate impedit
        consequuntur. Nostrum ut ex distinctio culpa vero numquam pariatur
        repudiandae nisi!
      </p>
    </div>
    <div class="footer">
      <h1>Nuestra Misión</h1>
      <h1>Nuestra Visión</h1>
      <h1>Nuestra Valores</h1>
    </div>
    <div class="footer">
      <h1>Nosotros</h1>
      <h1>Servicios</h1>
      <h1>Testimonios</h1>
      <h1>Citas</h1>
      <h1>Ubicación</h1>
      <h1>Contacto</h1>
    </div>
    <div class="footer">
      <h1>Encuentranos en :</h1>
      <div class="flex flex-col justify-center items-center gap-4">
        <img width="35" height="35" src="/img/icons/facebook.png" alt="" />
        <img width="35" height="35" src="/img/icons/instagram (1).png" alt="" />
        <img width="35" height="35" src="/img/icons/whatsapp.png" alt="" />
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
.footer {
  @apply flex flex-col justify-center items-center w-1/4 py-20 mx-10 gap-4;
}
</style>
