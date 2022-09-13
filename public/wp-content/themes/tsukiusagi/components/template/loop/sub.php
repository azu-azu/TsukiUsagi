<?php
// ver archive
if (is_archive()) {
  $args = array(
    'post_status' => 'publish',
    "posts_per_page" => -1,
    "orderby" => "rand",
    "post__not_in" => "", //現在のページを除外する場合：しない場合は空にする
  );

  if (is_post_type_archive('post')) {
    $args = array_merge($args, array(
      'post_type' => 'post',
    ));
  } elseif (is_post_type_archive('works')) {
    $args = array_merge($args, array(
      'post_type' => 'works',
    ));
  };
  echo usa_set_extra_sub_loop($args);

  // ver single
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

  $my_query = new WP_Query($args);
  if ($my_query->have_posts()) {
    $delay = 0;
?>

    <ul class="post-sub-loop">
      <?php while ($my_query->have_posts()) : $my_query->the_post(); ?>
        <li class="c-anim-box--down js-scroll-show" data-js_delay="<?php echo $delay; ?>">
          <?php echo usa_set_the_post_thumbnail('medium', 'sub'); ?>
        </li>
        <?php $delay += 150; ?>
      <?php endwhile; ?>
    </ul>

<?php
  } else {
    echo '<p>Coming soon</p>';
  };

  wp_reset_postdata();
  wp_reset_query();
};
