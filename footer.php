<?php
if (is_page('about') || is_front_page() || is_home() || is_page('home')) {
  $footer_class = 'p-footer--morning';
  $wave_color1 = 'rgba(204,218,213,0.5)';
  $wave_color4 = 'rgba(255,190,246,0.1)';
} else {
  $footer_class = 'p-footer--night';
  $wave_color1 = 'rgba(150,56,165,0.3)';
  $wave_color4 = 'rgba(1,0,10,0.3)';
}
?>

<footer class="l-footer <?php echo $footer_class; ?>">

  <?php if (!(is_page('about') || is_front_page() || is_home() || is_page('home'))) { ?>
    <p class="p-go-home"><a href="<?php echo esc_url(home_url()); ?>">ホームへ戻る</a></p>
  <?php } ?>

  <div class="c-sky"></div>
  <div class="c-sun"></div>
  <div class="c-sea c-ba-shining"></div>
  <div class="c-fin"></div>

  <svg class="c-wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="c-wave__parallax">
      <use xlink:href="#gentle-wave" x="48" y="0" fill="<?php echo $wave_color1; ?>" />
      <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,0,0.1)" />
      <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(252,187,196,0.1)" />
      <use xlink:href="#gentle-wave" x="48" y="7" fill="<?php echo $wave_color4; ?>" />
    </g>
  </svg>
  <?php get_template_part('components/parts/sea-stars'); ?>
  <div class="c-wave--color"></div>

  <p data-splitting class="c-copyright c-glitter-text">&copy;2021 TsukiUsagi.biz</p>
</footer>
<?php wp_footer(); ?>
</body>

</html>