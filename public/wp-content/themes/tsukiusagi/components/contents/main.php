<?php

$main_class = 'l-topic';

if (is_single()) {
  $sub_class = "text-contents";
} elseif (is_archive() || is_search()) {
  $sub_class = "list-contents";
}
?>

<main class="<?php echo $main_class; ?> <?php echo $sub_class; ?>">
  <?php get_search_form(); ?>
  <?php
  if (is_single()) {
    get_template_part('components/text/page-ttl');
    get_template_part('components/contents/single');
  } elseif (is_archive()) {
    get_template_part('components/contents/archive/main');
  } elseif (is_search()) {
    get_template_part('components/contents/search');
  }
  ?>

  <?php get_template_part('components/contents/after'); ?>
</main>