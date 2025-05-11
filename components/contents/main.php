<?php

$main_class = 'l-main';

if (is_front_page() || is_home() || is_page('home')) {
  $sub_class = "p-contents--top";
} elseif (is_single()) {
  $sub_class = "p-contents--post";
} elseif (is_archive() || is_search()) {
  $sub_class = "p-contents--archive";
}
?>

<main class="<?php echo $main_class; ?> <?php echo $sub_class; ?>">
  <?php
  if (!is_category()) get_template_part('components/text/page-ttl');
  if (is_front_page() || is_home() || is_page('home') || is_archive() || is_search()) {
    get_template_part('components/archive/main');
  } elseif (is_single()) {
    get_template_part('components/contents/single');
  }
  ?>
</main>