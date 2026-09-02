<script setup>
import { ref } from 'vue'

const modal = ref(false)
const plan = ref('Preventa Remesas')

function buy(selectedPlan = 'Preventa Remesas') {
  plan.value = selectedPlan
  modal.value = true
}
</script>

<template>
  <main>
    <section class="poster" id="top">
      <img src="/chicha-fest-poster.png" alt="Chicha Fest — Saico en São Paulo, viernes 18 de septiembre" />
    </section>

    <section class="intro">
      <div class="eyebrow">UNA NOCHE EN EL BARRIO</div>
      <p>La primera edición de Chicha Fest llega a São Paulo con Saico como invitado especial. Reggaetón, cumbia y una pista lista para cantar sin pausa.</p>
      <img class="event-date-banner" src="/event-date-banner.png" alt="Viernes 18 de septiembre, São Paulo, 7 PM" />
    </section>

    <section class="music centered-heading">
      <div class="eyebrow">DALE PLAY</div>
      <h2>El gran Saico<br /><em>y su nueva generación.</em></h2>
      <iframe title="Saico en Spotify" src="https://open.spotify.com/embed/artist/1P7ibSNMQ2VTi5YDBvwBO1?utm_source=generator&theme=0" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </section>

    <section class="tickets">
      <div class="section-title centered-heading">
        <div class="eyebrow">PREVENTA REMESAS</div>
        <h2>No te quedes<br /><em>compra tus entradas.</em></h2>
      </div>

      <div class="price-board">
        <header>
          <b>SECTORES</b>
          <div class="presale-stack"><b>PREVENTA</b><img src="/logo-remesas-white.svg" alt="Remesas.com" /><small>HASTA 10 SEPT.</small></div>
          <b>PRECIO FULL</b>
        </header>
        <div class="price-row"><div class="zone"><i class="dot yellow"></i><strong>VIP</strong></div><span>R$ <b>190</b><sup>.00</sup></span><em>R$ <b>400</b><sup>.00</sup></em></div>
        <div class="price-row"><div class="zone"><i class="dot white"></i><strong>GENERAL</strong></div><span>R$ <b>150</b><sup>.00</sup></span><em>R$ <b>300</b><sup>.00</sup></em></div>
        <div class="price-row"><div class="zone"><i class="dot green"></i><strong>BOX x5</strong></div><span>R$ <b>900</b><sup>.00</sup></span><em>R$ <b>2,000</b><sup>.00</sup></em></div>
        <div class="price-row"><div class="zone"><i class="dot green"></i><strong>BOX x10</strong></div><span>R$ <b>1,500</b><sup>.00</sup></span><em>R$ <b>3,000</b><sup>.00</sup></em></div>
        <button class="reserve-wide" @click="buy('Preventa Remesas')">COMPRAR ENTRADAS <span>↗</span></button>
      </div>
      <div class="vip-detail"><b>VIP INCLUYE</b><span>Acceso preferencial · mejor ubicación · experiencia exclusiva</span></div>
    </section>

    <section class="videos-section">
      <div class="centered-heading">
        <div class="eyebrow">EN VIVO</div>
        <h2>Saico<br /><em>sobre el escenario.</em></h2>
      </div>
      <div class="video-grid">
        <article>
          <div class="video-frame"><iframe title="El Gran Saico y su Nueva Generación — concierto completo" src="https://www.youtube-nocookie.com/embed/Ugp5QzXUxzw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>
          <span>CONCIERTO COMPLETO</span>
        </article>
        <article>
          <div class="video-frame"><iframe title="El Gran Saico y su Nueva Generación en vivo 4K" src="https://www.youtube-nocookie.com/embed/TkWrk0SnST8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>
          <span>SAICO EN VIVO · 4K</span>
        </article>
      </div>
    </section>

    <section class="location-section">
      <div class="centered-heading"><div class="eyebrow">NOS VEMOS EN</div><h2>Fiesta en<br /><em>São Paulo.</em></h2></div>
      <address><strong>AV. GUILHERME COTCHING, 481</strong><span>VILA MARIA · SÃO PAULO</span></address>
      <div class="map-frame"><iframe title="Mapa de Discoteca Sabor Latino" src="https://www.google.com/maps?q=Av.%20Guilherme%20Cotching%2C%20481%2C%20Vila%20Maria%2C%20S%C3%A3o%20Paulo&amp;output=embed" width="100%" height="360" style="border: 0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
      <a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=Av.%20Guilherme%20Cotching%2C%20481%2C%20Vila%20Maria%2C%20S%C3%A3o%20Paulo" target="_blank" rel="noopener">ABRIR EN GOOGLE MAPS <span>↗</span></a>
    </section>

    <footer class="viello-footer"><img src="/viello-footer.png" alt="Viello Producciones — Eventos que se sienten" /><small>© 2026 VIELLO PRODUCCIONES · SÃO PAULO</small></footer>

    <button class="buy-dock" @click="buy()">COMPRAR ENTRADAS <span>↗</span></button>
    <a class="float-wa" href="https://wa.me/5511988662162" target="_blank" aria-label="WhatsApp">◔</a>

    <div v-if="modal" class="modal-wrap" @click.self="modal = false">
      <form class="modal" @submit.prevent="modal = false">
        <button type="button" class="x" @click="modal = false">×</button>
        <div class="eyebrow">RESERVA · CHICHA FEST</div><h2>{{ plan }}</h2>
        <label>Nombre<input required placeholder="Tu nombre" /></label><label>WhatsApp<input required placeholder="+55 ..." /></label><label>Correo<input type="email" required placeholder="tu@email.com" /></label>
        <button class="main-cta">CONTINUAR AL PAGO <span>↗</span></button>
      </form>
    </div>
  </main>
</template>
