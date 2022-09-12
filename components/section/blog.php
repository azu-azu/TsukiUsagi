<?php
$ex_class = 'p-related-contents--ex';
$ex_inner_class = $ex_class . '__inner';
$bg_class = 'c-bg--gradient-f2';

$title = 'Blog';

$args = array(
  'post_status' => 'publish',
  "post_type" => "post",
  "category_name" => "css", // カテゴリをスラッグで指定する場合
  "posts_per_page" => 2,
  "orderby" => "rand",
  "post__not_in" => "", //現在のページを除外する場合：しない場合は空にする
);
?>

<section class="<?php echo $ex_class . ' ' . $bg_class; ?>" id="blog">
  <article class="<?php echo $ex_inner_class; ?>">
    <?php echo usa_set_heading_linear_show('h2', $title, 'sec'); ?>
    <?php usa_set_extra_sub_loop($args); ?>
    <?php get_template_part('components/common/read-more'); ?>
  </article>
</section>