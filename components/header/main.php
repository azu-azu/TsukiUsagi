<?php
if (is_front_page() || is_home() || is_page('home')) {
  get_template_part('components/common/loading-panel');
}
?>

<header class="l-header" id="js-l-header">
  <?php get_template_part('components/common/hamburger'); ?>
  <article class="p-header p-header--back">
    <nav class="p-gmenu">
      <ul class="c-nav c-ham-menu">
        <li class="js-ham-close" style="--i:3;"><a tabindex="0" class="c-bubbly-button--yellow c-focus" href="<?php echo esc_url(home_url('/')); ?>blog">Blog</a></li>
        <li class="js-ham-close" style="--i:1;"><a class="c-bubbly-button--white c-focus" href="<?php echo esc_url(home_url('/')); ?>">Profile</a></li>
        <li class="js-ham-close" style="--i:0;"><a class="c-bubbly-button--white" href="<?php echo esc_url(home_url('/')); ?>works">Works</a></li>
        <li class="js-ham-close" style="--i:2;"><a class="c-bubbly-button--yellow c-focus" href="<?php echo esc_url(home_url('/')); ?>/#contact">Contact</a></li>
        <div class="c-marker"></div>
      </ul>
    </nav>
  </article>
  <?php get_template_part('components/common/to-top'); ?>
</header>