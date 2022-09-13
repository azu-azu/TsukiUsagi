<header class="l-header" id="js-l-header">
  <?php get_template_part('components/common/hamburger'); ?>

  <article class="p-header p-header--back">
    <nav class="p-gmenu">
      <ul class="c-nav">
        <li class="js-ham-close" style="--i:0;"><a class="c-bubbly-button--white" href="<?php echo get_post_type_archive_link('works'); ?>">Works</a></li>
        <li class="js-ham-close" style="--i:1;"><a class="c-bubbly-button--white" href="<?php echo esc_url(home_url('/')); ?>#profile">Profile</a></li>
        <li class="js-ham-close" style="--i:2;"><a class="c-bubbly-button--yellow" href="<?php echo esc_url(home_url('/')); ?>#contact">Contact</a></li>
        <li class="js-ham-close" style="--i:3;"><a class="c-bubbly-button--yellow" href="<?php echo esc_url(home_url('/')); ?>/blog">Blog</a></li>
        <div class="c-marker"></div>
      </ul>
    </nav>
  </article>
</header>