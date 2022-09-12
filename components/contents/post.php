<?php
$args = array(
    'parent' => '0', // 親カテゴリのみ
    'orderby' => 'term_order',
    'order' => 'ASC',
    //'exclude' => '3,6,9', // 含めたくないカテゴリ
    //'include' > '4,8,12' // 含めたいカテゴリ
);
$categories = get_categories($args);
foreach ($categories as $category) :
    $title = $category->name;
    $id = $category->term_id;
    $url = get_category_link($id);
    echo usa_set_heading_linear_show('h2', $title, 'list', $url);

    $args = array(
        'cat' => $id,
        'posts_per_page' => 8,
    );
?>
    <section class="p-related-contents">
        <article class="p-related-contents__inner">
            <?php usa_set_extra_sub_loop($args); ?>
        </article>
    </section>
<?php endforeach; ?>