<template>
  <div>
    <!-- Nosotros -->
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

        <a href="/" class="flex items-center border rounded-full p-4 uppercase">
          Pide tu valoración gratuita
        </a>
      </div>
      <div class="flex justify-center items-center w-1/2">
        <img class="w-full object-contain" src="/img/sonrisa.png" alt="" />
      </div>
    </section>
    <!-- Servicios -->

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
    <!-- Testimonios-->

    <section id="testimonios" class="testimonial-section">
      <HomeTestimonial
        title="Testimonio 1"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            incidunt repellendus sequi, animi dolorem quam. Aliquid, enim!
            Laborum, praesentium earum eaque dolore a voluptate, illum, repellat
            velit quo quae exercitationem."
        img="/img/testimonio1.png"
      />
      <div class="flex justify-center items-center gap-4 p-6">
        <div class="w-1/4">
          <img src="/img/testimonio1.png" alt="" />
        </div>
        <div class="w-1/2">
          <h1 class="flex justify-center text-6xl">Testimonio 2</h1>
          <p class="flex justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            incidunt repellendus sequi, animi dolorem quam. Aliquid, enim!
            Laborum, praesentium earum eaque dolore a voluptate, illum, repellat
            velit quo quae exercitationem." img="/img/testimonio1.png
          </p>
        </div>
      </div>

      <HomeTestimonial
        title="Testimonio 3"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            incidunt repellendus sequi, animi dolorem quam. Aliquid, enim!
            Laborum, praesentium earum eaque dolore a voluptate, illum, repellat
            velit quo quae exercitationem."
        img="/img/testimonio1.png"
      />
      <a
        href="/"
        class="flex justify-center items-center border rounded-full p-4 uppercase w-1/4"
      >
        Ver más testimonios
      </a>
    </section>

    <!-- Contacto y citas -->

    <section id="citas" class="contact-section">
      <!-- Titulo de la sección -->
      <h1 class="flex justify-center text-5xl">Citas y contacto</h1>
      <!---->
      <div class="flex w-full mt-4">
        <!-- Mensaje para contactar para citas -->
        <div class="p-6 w-1/2">
          <h1 class="justify-center text-3xl mb-11">
            Déjanos tus datos para contactarte
          </h1>
          <form action="">
            <div class="flex flex-col justify-center items center gap-3">
              <div class="w-full mx-3">
                <input
                  type="text"
                  class="input-form"
                  placeholder="correo electrónico"
                />
              </div>
              <div class="w-full mx-3">
                <input type="text" class="input-form" placeholder="Nombre" />
              </div>
              <div class="w-full mx-3">
                <input type="text" class="input-form" placeholder="Telefono" />
              </div>
              <div>
                <textarea
                  class="w-full mx-3 input-form"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                ></textarea>
              </div>
            </div>
          </form>
          <div class="justify-center items-center p-6">
            <button class="button">Enviar mensaje</button>
          </div>
        </div>
        <!-- Información de contacto -->
        <div class="justify-center items-center w-1/2 p-6 space-y-4">
          <h1 class="text-start text-3xl mb-11">Contáctanos</h1>
          <div class="flex justify-start gap-4">
            <img
              width="40"
              height="40"
              class="object-contain rounded-full"
              src="/img/icons/gps.png"
              alt=""
            />
            <h1 class="">Bogotá, D.C</h1>
          </div>
          <div class="flex justify-start gap-4">
            <img
              width="40"
              height="40"
              class="object-contain rounded-full"
              src="/img/icons/correo.png"
              alt=""
            />
            <h1>correo@gmail.com</h1>
          </div>
          <div class="flex justify-start gap-4">
            <img
              width="40"
              height="40"
              class="object-contain rounded-full"
              src="/img/icons/telefono.png"
              alt=""
            />
            <h1>31212341234</h1>
            <h1>31212341234</h1>
          </div>
        </div>
      </div>
    </section>
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
.testimonial-section {
  @apply justify-center items-center p-10;
}
.contact-section {
  @apply flex flex-col justify-center items-center p-10;
  .input-form {
    border: 1px solid #ddd;
    padding: 10px 20px;
    border-radius: 40px;
  }
  .button {
    padding: 10px 20px;
    border-radius: 40px;
    background: #0ea8dc;
  }
}
</style>
