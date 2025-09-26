<?php
$ex_class = 'p-frame--ex';
$ex_inner_class = 'p-loop';
$bg_class = 'c-bg--gradient-f2';

$title = 'Blog';

// 共通のループ条件
$base_args = array(
  'post_status'    => 'publish',
  'post_type'      => 'post',
  'orderby'        => 'date',
  'order'          => 'DESC',
  'post__not_in'   => array(), // 除外なし
);

// sqlカテゴリ（2件）
$args_sql = array_merge($base_args, array(
  'category_name'  => 'sql',
  'posts_per_page' => 2,
));

// aiカテゴリ（2件）
$args_ai = array_merge($base_args, array(
  'category_name'  => 'ai',
  'posts_per_page' => 2,
));
?>

<section class="<?php echo $ex_class . ' ' . $bg_class; ?>" id="blog">
  <article class="<?php echo $ex_inner_class; ?>">
    <?php echo usa_set_heading_linear_show('h2', $title, 'sec'); ?>
    <div class="c-anim-box--down js-scroll-show">
      <?php
      usa_set_extra_sub_loop($args_sql);
      usa_set_extra_sub_loop($args_ai);
      ?>
    </div>
    <?php get_template_part('components/common/read-more'); ?>
  </article>
</section>