<template>
  <div>
    <!-- Nosotros -->
    <section id="nosotros" class="about-section">
      <div
        class="flex flex-col bg-success gap-6 px-10 justify-center items-center w-1/2"
      >
        <h1 class="text-5xl font-extrabold text-center">
          Odontología especializada en una experiencia placentera y de primera
          calidad, orientada a preservar y rehabilitar tu salud oral y la de tu
          familia
        </h1>
        <br />
        <p>
          En Dentofaciall, contamos con un prestigioso equipo de especialistas
          en todas las áreas de la odontología, altamente calificado, idóneo y
          competitivo.
        </p>

        <NuxtLink
          href="/"
          class="flex items-center bg-primary text-white font-bold border rounded-full hover:bg-blue-900 p-4 uppercase"
        >
          Pide tu valoración gratuita
        </NuxtLink>
      </div>
      <div class="flex justify-center items-center w-1/2">
        <img class="w-full object-contain" src="/img/sonrisa.png" alt="" />
      </div>
    </section>
    <!-- Servicios -->

    <section id="servicios" class="services-section">
      <h1
        class="flex justify-center text-4xl uppercase text-letters font-semibold"
      >
        Nuestros Servicios
      </h1>
      <div class="items-center grid grid-cols-3 gap-4 p-10">
        <HomeServices
          img="/img/ortodoncia.webp"
          title="Ortodoncia"
          paragraph="La ortodoncia corrige los defectos de la posición dental para
            mantener una boca perfecta y sana. En las clínicas dentales Dentix,
            somos especialistas en ortodoncia y realizamos diferentes tipos de
            tratamientos para adaptarnos a tus necesidades."
        />
        <HomeServices
          img="/img/rehabilitacion.webp"
          title="Rehabilitación oral"
          paragraph="Es de la odontología, la especialidad que como su nombre lo indica, se encarga de “habilitar” o devolver la función y estética de algunas o todas las piezas dentales ausentes o en mal estado."
        />
        <HomeServices
          img="/img/limpieza.webp"
          title="Limpieza dental"
          paragraph="La limpieza dental más conocida como profilaxis tiene diferentes funciones como proteger el esmalte y eliminar lo acumulado en los dientes y debajo de las encías, a lo que le llamamos placa dental."
        />
        <HomeServices
          img="/img/cordales.jpg"
          title="Extracción de cordales"
          paragraph="La cirugía de cordales es una intervención simple, mínimamente invasiva y casi indolora que se lleva a cabo para extraer las muelas del juicio (también denominadas cordales). La técnica quirúrgica consiste en anestesiar, con anestésico local, la zona periférica de la pieza a extraer."
        />
        <HomeServices
          img="/img/toxina.jpg"
          title="Tóxina Butulínica"
          paragraph="La cirugía de cordales es una intervención simple, mínimamente invasiva y casi indolora que se lleva a cabo para extraer las muelas del juicio (también denominadas cordales). La técnica quirúrgica consiste en anestesiar, con anestésico local, la zona periférica de la pieza a extraer."
        />
        <HomeServices
          img="/img/botox.jpg"
          title="Apicación de Botox"
          paragraph="La cirugía de cordales es una intervención simple, mínimamente invasiva y casi indolora que se lleva a cabo para extraer las muelas del juicio (también denominadas cordales). La técnica quirúrgica consiste en anestesiar, con anestésico local, la zona periférica de la pieza a extraer."
        />
      </div>
    </section>
    <!-- Testimonios-->

    <section id="testimonios" class="testimonial-section">
      <h1
        class="flex justify-center text-4xl uppercase text-letters font-semibold m-11"
      >
        Testimonios de nuestros clientes
      </h1>
      <HomeTestimonial
        title="Doris Silva"
        paragraph="“Estoy muy contenta porque yo no veía solución. Hay gente que dice que Marlon Becerra es solo fama, pero yo te puedo decir que no es fama es profesionalismo.”"
        img="/img/testimonio1.jpg"
      />
      <div class="flex justify-center items-center gap-4 p-6 mb-14">
        <div class="w-1/4">
          <img
            width="300"
            height="300"
            class="rounded-full"
            src="/img/testimonio2.jpg"
            alt=""
          />
        </div>
        <div
          class="w-1/2 p-6 border-2 rounded-full border-success shadow-lg hover:bg-success"
        >
          <h1 class="flex justify-center text-4xl font-bold">Carlos Niño</h1>
          <p class="flex justify-center">
            “He mejorado muchísimo porque puedo sonreír con mayor tranquilidad,
            puedo hablar, cantar, todo lo que implica interactuar con otras
            personas. A mí siempre que me preguntan por procedimientos
            odontológicos, hablo de Marlon Becerra porque Siempre lleva las
            cosas a la Perfección”.
          </p>
        </div>
      </div>

      <HomeTestimonial
        title="Alison Páez"
        paragraph="“Siempre había sido acomplejada porque me quitaron un colmillo ¡Literalmente me dejaron mueca! Al llegar acá me sorprendí, me sentí como en casa, siento que es un lugar para crearle una nueva vida a las personas. Llegar a Marlon Becerra me cambió la vida.”"
        img="/img/testimonio3.jpg"
      />
      <NuxtLink
        href="/"
        class="flex justify-center items-center text-white font-bold border rounded-full p-4 uppercase w-1/5 bg-primary hover:bg-blue-900"
      >
        Ver más testimonios
      </NuxtLink>
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
                  placeholder="Correo electrónico"
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
    <!-- Sección de Contacto -->
    <section id="contacto" class="contact-section">
      <div class="flex justify-center items-center gap-6">
        <img
          width="300"
          height="100"
          class="object-contain"
          src="/img/facebook (1).png"
          alt=""
        />
        <img
          width="300"
          height="100"
          class="object-contain"
          src="/img/instagram.png"
          alt=""
        />
        <img
          width="300"
          height="100"
          class="object-contain"
          src="/img/whatsapp (1).png"
          alt=""
        />
      </div>
    </section>
    <!-- Sección de Ubicación -->
    <section class="ubication-section" id="ubicacion">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0478656864366!2d-74.09791182418685!3d4.585430942644326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99679b547ca3%3A0x5402eb25493f6111!2sDentofaciall%20Odontolog%C3%ADa%20Especializada!5e0!3m2!1ses!2sco!4v1699456812021!5m2!1ses!2sco"
          height="700"
          width="1000"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.about-section {
  @apply flex h-screen pt-[127px];
}
.services-section {
  @apply justify-center items-center py-20;
}
.img-services {
  @apply object-cover items-center rounded-full;
}
.services-div {
  @apply flex flex-col items-center hover:border gap-4 p-10;
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
.ubication-section {
  @apply flex justify-center items-center p-3;
}
</style>
