<?php
$sec_class = 'p-sec-profile';
$bg_class = 'p-layer--f3 c-bg--gradient-f3';

$title = 'Profile';
?>

<section class="<?php echo $sec_class . ' ' . $bg_class; ?>" id="profile">
  <?php echo usa_set_heading_linear_show('h2', $title, 'sec'); ?>

  <article class="p-sec-profile__cards c-anim-box--scaleup js-scroll-show">
    <section class="swiper js-swiper c-card--single">
      <ul class="swiper-wrapper">
        <li class="swiper-slide c-rabbit--1a">
          <article class="swiper-slide__content">
            <h3>What I Love</h3>
            <p class="text">
              CSS & JavaScript<br>
              Animations
            </p>
          </article>
        </li>

        <li class="swiper-slide c-rabbit--3a">
          <article class="swiper-slide__content right">
            <h3>TsukiUsagiBiz</h3>
            <p class="text">
            Administrator: TsukiUsagi<br>
            Location: Tokyo, Japan
            </p>
          </article>
        </li>

        <li class="swiper-slide c-rabbit--1a">
          <article class="swiper-slide__content">
            <h3>WordPress</h3>
            <p class="text">
            - Theme Development<br>
            - Plugin Development<br>
            - CSS Architecture with FLOCSS
            </p>
          </article>
        </li>

        <li class="swiper-slide c-rabbit--2a">
          <article class="swiper-slide__content right">
            <h3>Excel / Access VBA</h3>
            <p class="text">
            - EUC Tool Development<br>
            - Function, UI<br>
            - Table Design<br>
            - SQL
            </p>
          </article>
        </li>

        <li class="swiper-slide c-rabbit--4a">
          <article class="swiper-slide__content">
            <h3>Background</h3>
            <p class="text">
              - VBA Development<br>
              - Web Production
            </p>
          </article>
        </li>
      </ul>

      <div class="swiper-pagination"></div>
    </section>
    <article class="slider-buttons">
      <button class="swiper-button-prev">Prev</button>
      <button class="swiper-button-next">Next</button>
    </article>
  </article>

  <?php get_template_part('components/parts/skills'); ?>
  <?php get_template_part('components/parts/falling-box'); ?>
</section>