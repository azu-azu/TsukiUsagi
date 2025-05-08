<?php
// works_archive
if (is_archive() && is_post_type_archive('works')) {
  $args = array(
    'post_type' => 'works',
    'post_status' => 'publish',
    "posts_per_page" => -1,
    "orderby" => "rand",
    "post__not_in" => "", //現在のページを除外する場合：しない場合は空にする
  );

  // single
} elseif (is_single()) {
  $args = array(
    'post_status' => 'publish',
    'posts_per_page' => 6,
    'orderby' =>  'rand',
    'post__not_in' => array($post->ID),
  );

  if (get_post_type() === 'post' && !is_post_type_archive('post')) {
    $cat = get_the_category();
    $cat = $cat[0];
    $args = array_merge($args, array(
      'post_type' => 'post',
      'category_name' => $cat->slug,
    ));
  } elseif (get_post_type() === 'works' && !is_post_type_archive('works')) {
    $args = array_merge($args, array(
      'post_type' => 'works',
    ));
  };
};

echo usa_set_extra_sub_loop($args);
