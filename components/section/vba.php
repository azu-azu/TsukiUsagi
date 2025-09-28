<!-- 20250928現在、非使用 -->
<?php
$ex_class = 'p-frame--ex';
$ex_inner_class = $ex_class . '__inner';
$bg_class = 'c-bg--gradient-f1';

$title = 'VBAの記事';
$id = 'vba';

$args = array(
    'post_status' => 'publish',
    "post_type" => "post",
    "category_name" => "vba", // カテゴリをスラッグで指定する場合
    "posts_per_page" => 4,
    "orderby" => "rand",
    "post__not_in" => "", //現在のページを除外する場合：しない場合は空にする
);
?>

<section class="<?php echo $ex_class . ' ' . $bg_class; ?>" id="<?php echo $id; ?>">
    <article class="<?php echo $ex_inner_class; ?>">
        <?php echo usa_set_heading_linear_show('h2', $title, 'sec'); ?>
        <?php usa_set_extra_sub_loop($args); ?>
        <?php get_template_part('components/common/read-more'); ?>
    </article>
</section>