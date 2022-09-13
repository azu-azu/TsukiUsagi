<?php
get_header();

$term = wp_get_object_terms($post->ID, 'カスタムタクソノミー名');
$args = array(
  'post_type' => 'works',
  'taxonomy' => 'カスタムタクソノミー名',
  'term' => $term[0]->name,
  'posts_per_page' => 10,
);
$custom_query = new WP_Query($args);

if ($custom_query->have_posts()) {
  while ($custom_query->have_posts()) {
    $custom_query->the_post();

    if (get_post_type() === 'works') {
      get_template_part('components/template/loop/sub');
    }
  }
}
wp_reset_postdata();
get_footer();
