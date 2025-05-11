<?php
// vba
$parent_vba = get_category_by_slug('vba'); // スラッグからカテゴリ情報取得
$vba_cat_id = $parent_vba->cat_ID;

// power_query
$parent_pq = get_category_by_slug('powerquery'); // スラッグからカテゴリ情報取得
$pq_cat_id = $parent_pq->cat_ID;

// オブジェクト取得
$obj = get_queried_object();
$obj_name = $obj->name;
$obj_id = $obj->cat_ID;


// 指定の親カテゴリか判定
$vba = false;
if ($obj->category_parent === $vba_cat_id || $obj_id === $vba_cat_id) $vba = true;

$pq = false;
if ($obj->category_parent === $pq_cat_id || $obj_id === $pq_cat_id) $pq = true;


// タイトル
if ($vba) $title = 'VBA';
if ($pq) $title = 'PowerQuery';
if (!$vba || !$pq) $title = '「' . $obj_name . '」の記事一覧';
$tag = 'h1';
?>

<?php echo usa_set_heading_linear_show($tag, $title, 'main'); ?>
<?php if (have_posts()) : ?>
    <?php if ($vba || $pq) : ?>
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