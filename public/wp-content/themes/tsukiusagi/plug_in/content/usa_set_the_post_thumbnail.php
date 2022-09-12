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
  $default_img = '<img src="' . do_shortcode('[uri]') . '/img/thumbnail/default.png" alt="うさぎの背景画像"></figure>';
  $class_container_main = "'wp-post-image__container c-glass c-anim-box--scaledown js-scroll-show'";
  $class_container_sub = "'wp-post-image__container c-glass'";

  switch (get_post_type()) {
    case 'post': // 投稿ページの場合

      // コンテナ追加
      switch ($type) {
        case 'main': // メインループの場合
          echo '<figure class=' . $class_container_main . '>';
          break;

        case 'sub': // サブループの場合
          echo '<a class=' . $class_container_sub . ' href="' . esc_url(get_permalink()) . '">';
          break;
      }

      // サムネイル追加
      if (has_post_thumbnail()) {
        the_post_thumbnail($size);
      } else {
        $class = "wp-post-image";
        if (has_category('wordpress')) {
          $png = "wordpress";
        } elseif (has_category('css')) {
          $png = "css";
        } elseif (has_category('php')) {
          $png = "php";
        } elseif (has_category('javascript')) {
          $png = "js";
        } elseif (has_category('vba')) {
          $png = "vba";
        } elseif (has_category('learn')) {
          $png = "learn";
        } else {
          $class = "";
          $png = "default";
        }
        echo '<img class=' . $class . ' ' . 'src="' . do_shortcode('[uri]') . '/img/thumbnail/' . $png . '.png">';
      };

      echo eyecatch_text_used();

      // 終了タグ追加
      switch ($type) {
        case 'main': // メインループの場合
          echo '</figure>';
          break;
        case 'sub': // サブループの場合
          echo '<p class="post-title">';
          the_title();
          echo '</p></a>';
          break;
      }
      break;

    case 'works': // カスタム投稿（works）の場合
      switch ($type) {

          // メインループの場合
        case 'main':
          $product_url = get_post_meta($post->ID, 'my_url', true);

          // URLがある場合
          if ($product_url !== '') {
            echo '<a href="' . esc_html($product_url) . '" class=' . $class_container_main . ' target="_blank">
              <i class="fas fa-external-link-alt"></i>';

            if (has_post_thumbnail()) {
              the_post_thumbnail($size);
            } else {
              echo $default_img;
            }

            echo '</a>';

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
          echo '<a class=' . $class_container_sub . ' href="' . esc_url(get_permalink()) . '">';
          if (has_post_thumbnail()) {
            the_post_thumbnail($size);
          } else {
            echo $default_img;
          }

          echo '<p class="post-title">';
          the_title();
          echo '</p></a>';
          break;
      }
      break;
  }
}
