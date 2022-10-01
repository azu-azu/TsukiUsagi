<?php

/**
 * Plugin Name: usa_set_the_post_thumbnail
 * Plugin URI:
 * Description: 投稿とアーカイブのサムネイル自動設定
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * @param string $size：画像の大きさ large/medium/small
 *
 */
function usa_set_the_post_thumbnail($size, $type) {
  global $post;
  $class_container_main = "'c-thumbnail c-anim-box--scaledown js-scroll-show'";
  $class_container_sub = "'p-posts-list__figure c-thumbnail'";

  $default_img = '<img src="' . do_shortcode('[uri]') . '/img/thumbnail/default.png" alt="うさぎの背景画像"></figure>';

  if (!(get_post_type() === 'works')) {
    $cat = get_the_category($post->ID);
    $cat = $cat[0];
    $cat_data = get_option('cat_' . intval($cat->term_id));

    // 子カテゴリに画像がない場合は親カテゴリの画像を取得する
    if ($cat_data == false && $cat->parent !== 0) {
      $parent_id = $cat->category_parent;
      $parent = get_category($parent_id);
      $cat_data = get_option('cat_' . intval($parent->term_id));
    }
  }

  switch (get_post_type()) {
      // 投稿ページの場合
    case 'post':

      // コンテナ追加
      switch ($type) {
        case 'main': // メインループの場合
          echo '<figure class=' . $class_container_main . '>';
          break;

        case 'sub': // サブループの場合
          echo '<a href="' . esc_url(get_permalink()) . '">
          <figure class=' . $class_container_sub . '>';
          break;
      }

      // サムネイル追加
      if (has_post_thumbnail()) {
        the_post_thumbnail($size);
      } elseif (!has_post_thumbnail() && $cat_data !== false) {
        echo '<img src="' . esc_html($cat_data['img']) . '">';
      } else {
        echo $default_img;
      };
      echo eyecatch_text_used();
      echo '</figure>';

      // サブループの場合の終了タグ
      if ($type === 'sub') {
        echo '<div class="p-posts-list__body"><p class="post-title">';
        the_title();
        echo '</p></div></a>';
      }
      break;


      // カスタム投稿（works）の場合
    case 'works':
      switch ($type) {

          // メインループの場合
        case 'main':
          $product_url = get_post_meta($post->ID, 'my_url', true);

          // URLがある場合
          if ($product_url !== '') {
            echo '<a href="' . esc_html($product_url) . '"target="_blank">
            <figure class=' . $class_container_main . '>
              <i class="fas fa-external-link-alt"></i>';

            if (has_post_thumbnail()) {
              the_post_thumbnail($size);
            } else {
              echo $default_img;
            }

            echo '</figure></a>';

            // URLがない場合
          } elseif ($product_url == '') {
            echo '<figure class=' . $class_container_main . '>';

            if (has_post_thumbnail()) {
              the_post_thumbnail($size);
            } else {
              echo $default_img;
            }

            echo '</figure>';
          }
          break;

          // サブループの場合
        case 'sub':
          echo '<a href="' . esc_url(get_permalink()) . '">
          <figure class=' . $class_container_sub . '>';

          if (has_post_thumbnail()) {
            the_post_thumbnail($size);
          } else {
            echo $default_img;
          }

          echo '</figure>';
          echo '<div class="p-posts-list__body">';
          echo '<p class="post-title">';
          the_title();
          echo '</p>';
          echo '</div></a>';
          break;
      }
      break;
  }
}
