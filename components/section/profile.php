<section class="p-sec-profile c-bg--gradient-f3" id="profile">
  <?php echo usa_set_heading_linear_show('h2', 'Profile', 'sec'); ?>

  <article class="p-sec-profile__cards c-anim-box--scaleup js-scroll-show">
    <section class="swiper js-swiper c-card--single">
      <ul class="swiper-wrapper">
        <li class="swiper-slide c-rabbit--1a">
          <article class="swiper-slide__content">
            <h3>好きなこと</h3>
            <p class="text">
              CSSとJavaScriptの<br>
              アニメーション
            </p>
          </article>
        </li>

        <li class="swiper-slide c-rabbit--3a">
          <article class="swiper-slide__content right">
          <h3>月うさぎWeb</h3>
          <p class="text">
              管理人：月うさぎ<br>
              所在地：東京
            </p>
          </article>
        </li>

        <li class="swiper-slide c-rabbit--1a">
          <article class="swiper-slide__content">
          <h3>WordPress</h3>
            <p class="text">
              ・テーマ開発<br>
              ・プラグイン開発<br>
              ・FLOCSSでのCSS設計
            </p>
          </article>
        </li>

        <li class="swiper-slide c-rabbit--2a">
          <article class="swiper-slide__content right">
            <h3>ExcelVBA</h3>
            <p class="text">
              ・自動化ツール作成<br>
              ・機能設計
            </p>
          </article>
        </li>

        <li class="swiper-slide c-rabbit--4a">
          <article class="swiper-slide__content">
            <h3>経歴</h3>
            <p class="text">
              ・企業でVBA開発<br>
              ・2021.5〜 WEB制作
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

  <?php get_template_part('components/parts/skills');?>
  <?php get_template_part('components/parts/falling-box');?>
</section>
