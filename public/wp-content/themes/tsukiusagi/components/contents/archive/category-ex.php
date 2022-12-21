<?php
// クラス名
$class_link = "c-bg--white--opacity";
$class_container = "p-posts-list__figure c-thumbnail";
$class_body = "p-posts-list__body";
$class_title = "p-posts-list__title";

// スラッグからカテゴリ情報取得
$parents = array(
    'a' => get_category_by_slug('powerquery'),
    'b' => get_category_by_slug('vba'),
);


foreach ($parents as $parent) :
    $cat_id = $parent->cat_ID;
    $taxonomy_name = "category";
    $num = 2;

    // 親カテゴリのタイトル用
    $parent_title = $parent->name;
    $count = $parent->category_count;
    $url = get_category_link($cat_id);

    // 子カテゴリ
    $children = get_categories(array(
        'child_of' => $cat_id,
        'orderby' => 'ID', // ソート規則
        'order' => 'ASC',
    ));

    // サムネイル
    $cat_data = get_option('cat_' . intval($cat_id));
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
<?php endforeach; ?>