<template>
  <div>
    <section id="nosotros" class="about-section">
      <div class="flex flex-col gap-6 px-10 justify-center items-center w-1/2">
        <h1 class="text-5xl">
          Encabezado sobre la transformación que brinda tu producto
        </h1>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis optio
          dolorum illum nobis, minima deserunt possimus cum velit quod
          voluptatum eius, cupiditate dolorem eaque ipsum impedit magnam aut
          nisi molestiae.
        </p>

        <a class="flex items-center border rounded-full p-4 uppercase">
          Pide tu valoración gratuita
        </a>
      </div>
      <div class="flex justify-center items-center w-1/2">
        <img class="w-full object-contain" src="/img/sonrisa.png" alt="" />
      </div>
    </section>

    <section id="servicios" class="services-section">
      <h1 class="flex justify-center text-5xl">Nuestros Servicios</h1>
      <div class="items-center grid grid-cols-3 gap-4 p-10">
        <div class="services-div">
          <img width="50" height="50" src="/img/icons/diente.png" />
          <h1>Servicio 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            incidunt repellendus sequi, animi dolorem quam. Aliquid, enim!
            Laborum, praesentium earum eaque dolore a voluptate, illum, repellat
            velit quo quae exercitationem.
          </p>
        </div>
        <div class="services-div">
          <img width="50" height="50" src="/img/icons/diente.png" />
          <h1>Servicio 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            incidunt repellendus sequi, animi dolorem quam. Aliquid, enim!
            Laborum, praesentium earum eaque dolore a voluptate, illum, repellat
            velit quo quae exercitationem.
          </p>
        </div>
        <div class="services-div">
          <img width="50" height="50" src="/img/icons/diente.png" />
          <h1>Servicio 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            incidunt repellendus sequi, animi dolorem quam. Aliquid, enim!
            Laborum, praesentium earum eaque dolore a voluptate, illum, repellat
            velit quo quae exercitationem.
          </p>
        </div>
        <div class="services-div">
          <img width="50" height="50" src="/img/icons/diente.png" />
          <h1>Servicio 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            incidunt repellendus sequi, animi dolorem quam. Aliquid, enim!
            Laborum, praesentium earum eaque dolore a voluptate, illum, repellat
            velit quo quae exercitationem.
          </p>
        </div>
        <div class="services-div">
          <img width="50" height="50" src="/img/icons/diente.png" />
          <h1>Servicio 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            incidunt repellendus sequi, animi dolorem quam. Aliquid, enim!
            Laborum, praesentium earum eaque dolore a voluptate, illum, repellat
            velit quo quae exercitationem.
          </p>
        </div>
        <div class="services-div">
          <img width="50" height="50" src="/img/icons/diente.png" />
          <h1>Servicio 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            incidunt repellendus sequi, animi dolorem quam. Aliquid, enim!
            Laborum, praesentium earum eaque dolore a voluptate, illum, repellat
            velit quo quae exercitationem.
          </p>
        </div>
      </div>
    </section>

    <section id="testimonios"></section>
    <section id="citas"></section>
    <section id="ubicacion"></section>
    <section id="contacto"></section>
  </div>
</template>

<style lang="scss">
.about-section {
  @apply flex h-screen pt-[127px];
}
.services-section {
  @apply justify-center items-center py-20;
}
.services-div {
  @apply flex flex-col items-center hover:border p-10;
}
</style>
