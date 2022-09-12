<?php
get_header();
get_template_part('components/common/loading-panel');
get_template_part('components/common/to-top');
get_template_part('components/parts/first-view');
get_template_part('components/header/lower');
?>

<?php if (is_category()) : ?>
  <?php get_template_part('components/contents/category'); ?>
<?php else : ?>
  <?php if (get_post_type() === 'post' && !is_archive()) : ?>
    <div class="c-flowing-clouds sp-none"></div>
  <?php endif; ?>
  <?php get_template_part('components/contents/main'); ?>
<?php endif; ?>

<?php
if (get_post_type() !== 'works') get_sidebar();
get_footer();
