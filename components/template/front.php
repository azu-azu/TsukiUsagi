<?php get_template_part('components/header/front'); ?>
<?php get_template_part('components/common/train'); ?>
<?php get_template_part('components/parts/floating-stars'); ?>

<article class="l-main c-bg--gradient-main">
  <?php get_template_part('components/section/moon'); ?>

  <!-- テスト：本番には上げない -->
  <?php get_template_part('components/section/vba'); ?>

  <?php get_template_part('components/section/works'); ?>
  <?php get_template_part('components/section/blog'); ?>
  <?php get_template_part('components/section/profile'); ?>
  <?php get_template_part('components/section/contact'); ?>
</article>