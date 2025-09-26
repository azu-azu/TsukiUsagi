<?php
$sec_class = 'p-sec-works';
$bg_class = 'p-layer--f1 c-bg--gradient-f1';

$title = 'Works';
?>

<section class="<?php echo $sec_class . ' ' . $bg_class; ?>" id="works">
  <?php echo usa_set_heading_linear_show('h2', $title, 'sec'); ?>

  <article class="c-card--works c-read-more c-rabbit--1b c-rabbit--3a c-anim-box--scaleup js-scroll-show">
    <a href="<?php echo get_post_type_archive_link('works'); ?>">
      <?php
      $text = 'クリックで';
      $finger = true;
      echo usa_set_jump_btn_contents($text, $finger);
      ?>

    </a>
  </article>
</section>