<section class="p-sec-works c-bg--gradient-f1" id="works">
  <?php echo usa_set_heading_linear_show('h2', 'works', 'sec'); ?>

  <article class="c-card--works c-read-more c-rabbit--1b c-rabbit--3a c-anim-box--scaleup js-scroll-show">
    <a href="<?php echo get_post_type_archive_link('works'); ?>">
      <?php
      $text = 'クリックで<span>実績ページへ</span>';
      $finger = true;
      echo usa_set_jump_btn_contents($text, $finger);
      ?>

    </a>
  </article>
  <?php get_template_part('components/parts/playing-box'); ?>
</section>