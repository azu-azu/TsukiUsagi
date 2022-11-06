<?php
// スラッグからID取得
$vba_cat_id = get_category_by_slug('vba');
$vba_cat_id = $vba_cat_id->cat_ID;

$num = 2;

$args = array(
    'parent' => '0', // 親カテゴリのみ
    'orderby' => 'term_order',
    'order' => 'ASC',
    'exclude' => $vba_cat_id, // 含めたくないカテゴリ
    //'include' => '4,5,6' // 含めたいカテゴリ
);

$categories = get_categories($args);

// 説明順の数値で並べ替え
usort($categories, function ($a, $b) {
    return $a->description - $b->description;
});

foreach ($categories as $category) :
    $title = $category->name;
    $id = $category->term_id;
    $url = get_category_link($id);
    $count = $category->count;

    $args = array(
        'cat' => $id,
        'posts_per_page' => $num,
    );
?>

    <section class="p-frame">
        <article class="p-loop">
            <?php
            echo usa_set_heading_linear_show('h2', $title, 'inline', $url);
            usa_set_extra_sub_loop($args);

            if ($count > $num) echo usa_make_link_button('» もっと見る', '', $url);
            ?>
        </article>
    </section>

<?php
endforeach;
