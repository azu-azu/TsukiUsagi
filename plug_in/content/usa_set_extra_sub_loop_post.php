<?php

/**
 * Plugin Name: usa_set_extra_sub_loop_post
 * Plugin URI:
 * Description: 投稿ループ
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * $argsの中身例
 * @param num $posts_per_page：1ページの表示数
 */
function usa_set_extra_sub_loop_post($num) {
  $args = array(
    'post_type' => 'post', // 投稿タイプを指定（カスタム投稿の場合はその投稿名を記述）
    'posts_per_page' => $num,
    'order' => 'DESC' // 降順
  );
?>

  <section class="p-frame">
    <article class="p-loop">
      <?php usa_set_extra_sub_loop($args); ?>
    </article>
  </section>

<?php get_template_part('components/parts/pagination');
}
