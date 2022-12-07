<?php
$parent_args = get_category_by_slug('vba'); // スラッグからカテゴリ情報取得
$vba_cat_id = $parent_args->cat_ID;
$taxonomy_name = "category";
$num = 2;

// 親カテゴリのタイトル用
$parent_title = $parent_args->name;
$count = $parent_args->category_count;
$url = get_category_link($vba_cat_id);

// 子カテゴリ
$children = get_categories(array(
    'child_of' => $vba_cat_id,
    'orderby' => 'ID', // ソート規則
    'order' => 'ASC',
));


// クラス名
$class_link = "c-bg--white--opacity";
$class_container = "p-posts-list__figure c-thumbnail";
$class_body = "p-posts-list__body";
$class_title = "p-posts-list__title";

// サムネイル
$cat_data = get_option('cat_' . intval($vba_cat_id));
$thumbnail_url = esc_html($cat_data['img']);
$thumbnail = '<img src="' . $thumbnail_url . '" alt="サムネイル">';
?>

<?php if ($children) : ?>
    <section class="p-frame">
        <article class="p-loop">
            <?php echo usa_set_heading_linear_show('h2', $parent_title, 'inline', $url); ?>
            <ul class="p-posts-list p-post-sub-loop">
                <?php foreach ($children as $child) : ?>
                    <li class="p-posts-list__item">
                        <a class="<?php echo $class_link; ?>" href="<?php echo get_category_link($child->term_id); ?>">
                            <figure class="<?php echo $class_container; ?>">
                                <?php echo $thumbnail; ?>
                            </figure>
                            <div class="<?php echo $class_body; ?>">
                                <div class="<?php echo $class_title; ?>"><?php echo $child->name; ?></div>
                            </div>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
            <?php
            // if ($count > $num) echo usa_make_link_button('» もっと見る', '', $url);
            ?>
        </article>
    </section>
<?php endif; ?>