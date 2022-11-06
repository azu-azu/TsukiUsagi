<?php
$parent_args = get_category_by_slug('vba'); // スラッグからカテゴリ情報取得
$vba_cat_id = $parent_args->cat_ID;

$obj = get_queried_object();
$name = $obj->name;

// 親カテゴリがVBAかどうか判定
$vba = false;
if ($obj->category_parent === $vba_cat_id) $vba = true;

if ($vba) $title = 'VBA';
if (!$vba) $title = '「' . $name . '」の記事一覧';
$tag = 'h1';
?>

<?php echo usa_set_heading_linear_show($tag, $title, 'main'); ?>
<?php if (have_posts()) : ?>
    <?php if ($vba) : ?>
        <?php get_template_part('components/contents/archive/vba-tag'); ?>
    <?php else : ?>
        <section class="p-frame">
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



<?php
// たぶんこれは不要
// if ($obj &&  get_post_type() === 'post' && !is_tag() && $obj->parent === 0) {
//     // postで親カテゴリの場合
//     $name = $obj->cat_name;
// } else {
//     $name = $obj->name;
// }
