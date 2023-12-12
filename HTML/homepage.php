<?php include 'header.php';?>
<main class="main">
	<section class="banner-home">
		<div class="slider-banner">
			 <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <video id="image-detail-layer" autoplay="autoplay" playsinline="" class="image--detail bg-video bg-video--fullscreen" loop="loop" muted="false" preload="auto" src="../dist/video/videobanner.mp4"></video>
        </div>
      <div class="swiper-slide">
        <img src="../dist/video/Rectangle197.png" alt="">
      </div>
      <div class="swiper-slide"><img src="../dist/video/Rectangle197.png" alt=""></div>
      <div class="swiper-slide">
        <video id="image-detail-layer" autoplay="autoplay" playsinline="" class="image--detail bg-video bg-video--fullscreen" loop="loop" muted="false" preload="auto" src="../dist/video/videobanner.mp4"></video>
      </div>
      
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
		</div>
	</section>
</main>
<?php include 'footer.php';?>
<script>
    var swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
</script>