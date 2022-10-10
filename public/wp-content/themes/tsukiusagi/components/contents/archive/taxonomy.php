<?php
$obj = get_queried_object();
if ($obj &&  get_post_type() === 'post' && !is_tag() && $obj->parent === 0) {
    // postで親カテゴリの場合
    $name = $obj->cat_name;
} else {
    $name = $obj->name;
}

$tag = 'h1';
$title = '「' . $name . '」の記事一覧';
?>

<?php echo usa_set_heading_linear_show($tag, $title, 'main'); ?>
<?php if (have_posts()) : ?>
    <section class="p-frame">
        <article class="p-loop">
            <ul class="p-posts-list post-sub-loop">
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