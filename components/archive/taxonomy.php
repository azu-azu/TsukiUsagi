<?php
// 特殊表示が必要なカテゴリのスラッグ配列
$special_categories = ['vba', 'powerquery'];

// オブジェクト取得
$obj = get_queried_object();
$obj_name = $obj->name;
$obj_id = $obj->cat_ID;
$current_cat_slug = get_category($obj_id)->slug;

// 特殊表示が必要かどうかを判定
$is_special_category = false;
$display_title = $obj_name;

foreach ($special_categories as $special_slug) {
    $parent_cat = get_category_by_slug($special_slug);
    if ($parent_cat && ($obj->category_parent === $parent_cat->cat_ID || $obj_id === $parent_cat->cat_ID)) {
        $is_special_category = true;
        $display_title = ucfirst($special_slug); // VBA, PowerQuery
        break;
    }
}

$tag = 'h1';
?>

<?php echo usa_set_heading_linear_show($tag, $display_title, 'main'); ?>
<?php if (have_posts()) : ?>
    <?php if ($is_special_category) : ?>
        <?php get_template_part('components/archive/tag'); ?>
    <?php else : ?>
        <section class="p-frame" id="js-content-start">
            <article class="p-loop">
                <ul class="p-posts-list p-post-sub-loop">
                    <?php while (have_posts()) : the_post(); ?>
                        <li class="p-posts-list__item">
                            <?php echo usa_set_the_post_thumbnail('medium', 'sub'); ?>
                        </li>
                    <?php endwhile; ?>
                </ul>
                <?php get_template_part('components/parts/pagination'); ?>
            </article>
        </section>
    <?php endif; ?>
<?php endif; ?>