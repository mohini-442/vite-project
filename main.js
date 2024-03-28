import './style.css'

document.querySelector('#app').innerHTML = `

  <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper"
    speed="600" parallax="true" pagination="true" pagination-clickable="true" navigation="true">
    <div slot="container-start" class="parallax-bg"
      style="background-image: url(https://i.ibb.co/3TmgM94/headerbg.webp);" data-swiper-parallax="-23%"></div>

    <swiper-slide class='d-flex justify-content-center align-items-center flex-column min-vh-100'>
      <div class="title" data-swiper-parallax="-300">Slide 1</div>
      <div class="text" data-swiper-parallax="-100">
        <p class='text-center'>
           Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but also for film and television, events, merchandising, and partnerships.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class='d-flex justify-content-center align-items-center flex-column min-vh-100'>
      <div class="title" data-swiper-parallax="-300">Slide 2</div>
      <div class="text" data-swiper-parallax="-100">
        <p class='text-center'>
          Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but also for film and television, events, merchandising, and partnerships.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class='d-flex justify-content-center align-items-center flex-column min-vh-100'>
      <div class="title" data-swiper-parallax="-300">Slide 3</div>
      <div class="text" data-swiper-parallax="-100">
        <p class='text-center'>
          Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but also for film and television, events, merchandising, and partnerships.
        </p>
      </div>
    </swiper-slide>
  </swiper-container>


`

setupCounter(document.querySelector('#counter'))