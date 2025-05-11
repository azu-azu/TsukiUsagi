<?php
// カテゴリの一覧ページをタグ一覧で表示
// フロント設定
// クラス名
$class_link = "c-bg--white--opacity";
$class_container = "p-posts-list__figure c-thumbnail";
$class_body = "p-posts-list__body";
$class_title = "p-posts-list__title";


$obj = get_queried_object();
$cat_id = $obj->cat_ID;
$cat_name = $obj->cat_name;
$title = $cat_name;

// カテゴリに紐づくタグ取得
$post_ids = get_objects_in_term($cat_id, 'category');
$tags_array = wp_get_object_terms($post_ids, 'post_tag');

// 説明順の数値で並べ替え
usort($tags_array, function ($a, $b) {
    return $a->description - $b->description;
});

?>


<?php if (have_posts($cat_id)) : ?>
    <?php
    $cat_args = array(
        'category' => $cat_id,
        "posts_per_page" => -1 // これを記述しても全部表示されない
    );

    $cat_posts = get_posts($cat_args);
    ?>

    <section class="p-frame">
        <article class="p-loop">

            <?php
            // タグ名取得
            if ($tags_array) : ?>
                <?php foreach ($tags_array as $tag) : ?>
                    <ul class="p-posts-list p-tax-list">
                        <li>
                            <h2>
                                <a class="c-title--tag" href="<?php echo get_tag_link($tag->term_id); ?>">
                                    <?php echo $tag->name; ?>
                                </a>
                            </h2>
                        </li>

                        <?php
                        // 記事一覧取得
                        $tag_args = array(
                            'posts_per_page' => -1, // これを設定しないと5つまでしか表示されない 22/12/18
                            'tag_id' => $tag->term_id
                        );
                        $tag_posts = get_posts($tag_args);
                        ?>
                        <?php foreach ($tag_posts as $post) : setup_postdata($post); ?>
                            <li class="p-posts-list__item--list">
                                <a class="<?php echo $class_link; ?>" href="<?php echo esc_url(get_permalink()); ?>">
                                    <div class="<?php echo $class_title; ?>"><?php the_title(); ?></div>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endforeach; ?>
            <?php endif; ?>

        </article>
    </section>
<?php endif; ?>



<?php
// 親カテゴリかどうかを判定する場合
// if ($obj &&  get_post_type() === 'post' && !is_tag() && $obj->parent === 0) {
//     // postで親カテゴリの場合
//     $name = $obj->cat_name;
// } else {
//     $name = $obj->name;
// }
