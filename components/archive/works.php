<?php
$args2 = array(
    'taxonomy'   => 'works-category',
    'hide_empty' => false, // ← 投稿がなくてもカテゴリを表示する
    'orderby'    => 'term_order', // ← ターム順で並べ替え（順序変更プラグインと連携できる）
    'order'      => 'ASC',
);

$categories = get_terms($args2);

foreach ($categories as $category) :
    $title = $category->name;
    $id = $category->term_id;
    $url = get_term_link($id, 'works-category');
    $count = $category->count;

    $args = array(
        'post_type'      => 'works',
        'post_status'    => 'publish',
        'posts_per_page' => $num,
        'orderby' => 'date',
        'order'   => 'ASC',
        'post__not_in'   => array(), // 除外する投稿ID。ないなら空配列でOK

        'tax_query' => array(
            array(
                'taxonomy' => 'works-category',
                'field'    => 'term_id',
                'terms'    => $id,
            ),
        ),
    );
?>

    <section class="p-frame">
        <article class="p-loop">
            <?php echo usa_set_heading_linear_show('h2', $title, 'inline', $url); ?>
            <?php usa_set_extra_sub_loop($args); ?>
        </article>
    </section>

<?php
endforeach;
