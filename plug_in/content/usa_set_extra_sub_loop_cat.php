<?php

/**
 * Plugin Name: usa_set_extra_sub_loop_cat
 * Plugin URI:
 * Description: 一覧表示のサブループ カテゴリ別
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * $argsの中身例
 * @param num $posts_per_page：1ページの表示数
 */
function usa_set_extra_sub_loop_cat($num) {
  // 含めたくないカテゴリ
  // $vba_cat_id = get_category_by_slug('vba');
  // $pq_cat_id = get_category_by_slug('powerquery');
  // $exclude = array($vba_cat_id->cat_ID, $pq_cat_id->cat_ID);

  $args = array(
    'parent' => '0', // 親カテゴリのみ
    'orderby' => 'term_order',
    'order' => 'ASC',
    // 'exclude' => $exclude // 含めたくないカテゴリ
    // 'include' => '4,5,6' // 含めたいカテゴリ
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
        <?php echo usa_set_heading_linear_show('h2', $title, 'inline', $url); ?>
        <?php usa_set_extra_sub_loop($args); ?>
        <?php if ($count > $num) echo usa_make_link_button('» more', '', $url); ?>
      </article>
    </section>

<?php
  endforeach;
}
