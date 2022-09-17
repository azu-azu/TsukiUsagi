<?php
get_header();
get_template_part('components/common/loading-panel');
get_template_part('components/common/to-top');
get_template_part('components/parts/first-view');
get_template_part('components/header/lower');
?>

<?php if (is_category() || is_tag() || is_tax()) : ?>
  <?php get_template_part('components/contents/archive/main'); ?>

<?php else : ?>
  <?php if (get_post_type() === 'post' && !is_archive()) : ?>
    <div class="p-flowing-clouds sp-none"></div>
  <?php endif; ?>

  <?php get_template_part('components/contents/main'); ?>
<?php endif; ?>

<?php
get_footer();
