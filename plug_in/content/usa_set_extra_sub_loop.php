<?php

/**
 * Plugin Name: usa_set_extra_sub_loop
 * Plugin URI:
 * Description: 一覧表示のサブループ
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * $argsの中身例
 * @param string $post_type：表示させたい一覧の投稿タイプ名
 * @param long $posts_per_page：1ページの表示数
 * @param string $orderby：ソート順
 * @param array $post__not_in：除外する記事をIDで指定
 *
 */
function usa_set_extra_sub_loop($args) {
  $my_query = new WP_Query($args);
?>

  <?php if ($my_query->have_posts()) : ?>
    <ul class="p-posts-list p-post-sub-loop">
      <?php while ($my_query->have_posts()) : $my_query->the_post(); ?>
        <li class="p-posts-list__item">
          <?php echo usa_set_the_post_thumbnail('medium', 'sub'); ?>
        </li>
      <?php endwhile; ?>
    </ul>

  <?php else : ?>
    <p>coming soon</p>
  <?php endif; ?>

<?php
  wp_reset_postdata();
  wp_reset_query();
}

// orderby
// 'author' - 著者で並び替える。('post_author' でも良い。)
// 'title' - タイトルで並び替える。('post_title' でも良い。)
// 'type' - 投稿タイプで並び替える。('post_type' でも良い。)
// 'date' - 日付で並び替える。('post_date' でも良い。)
// 'modified' - 更新日で並び替える。('post_modified' でも良い。)
// 'parent' - 投稿/固定ページの親 ID 順。('post_parent' でも良い。)
// 'rand' - ランダムで並び替える。'RAND(x)' も使えます（'x' はシードになる整数）。
// 'comment_count' - コメント数で並び替える（バージョン 2.9 以降で使用可能）。
// 'relevance' - 文字列検索のとき次の順で並び替える: 1. 文字列全体がマッチ。 2. すべての単語がタイトルに含まれる。 3. いずれかの単語がタイトルに現れる。 4. 文字列全体が post_content に現れる。
// 'menu_order' - 固定ページの表示順で並び替える。固定ページ（固定ページ編集画面のページ属性ボックス）と添付ファイル（ギャラリー内のメディアの順番に相当）で使うことが最も多いでしょう。しかしバラバラの値が入った 'menu_order' を持つ任意の投稿タイプに対して使うことができます（デフォルト値は 0）。
// 'meta_value' - カスタムフィールドで並び替える。'meta_key=keyname' がクエリに存在しなければいけません。また、ソート順は文字列順になることに注意して下さい。数値だと予想外の挙動をします（通常、1, 3, 4, 6, 34, 56となると思うところが、1, 3, 34, 4, 56, 6となります）。数値なら代わりに 'meta_value_num' を使ってください。カスタムフィールドの値を特定の型にキャストしたければ 'meta_type' を指定できます。有効な値は 'NUMERIC', 'BINARY', 'CHAR', 'DATE', 'DATETIME', 'DECIMAL', 'SIGNED', 'TIME', 'UNSIGNED' です（'meta_query' と同じ）。'meta_type' を使うとき、それに応じて 'meta_value_*' も使えます。例えば 'meta_type' に DATETIME を指定するとき、ソート順の定義に 'meta_value_datetime' を使えます。
// 'meta_value_num' - カスタムフィールドの値を数値として並び替える。（バージョン 2.8 以降で使用可能）。これもまた、'meta_key=keyname'がクエリに存在しなければならないことに注意して下さい。こちらは 'meta_value' 示したような数値での並べ替えを可能にします。