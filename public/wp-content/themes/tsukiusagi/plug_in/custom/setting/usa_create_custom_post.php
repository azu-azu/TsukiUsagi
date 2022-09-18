<?php

/**
 * Plugin Name: create_custom_post
 * Plugin URI:
 * Description: カスタムタクソノミー追加
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * @param array $array：スラッグ、名前
 *
 */

// カスタム投稿の数だけarrayを用意する
$post_works_array = array(
    'post_type' => 'works',
    'name'      => 'works',
    'icon'      => 'dashicons-editor-paste-word',
);

// ↓ここから共通↓
function usa_create_custom_post($array) {
    $post_args = usa_return_custom_post_args($array);
    $category_args = usa_return_custom_cat_args($array);
    $tag_args = usa_return_custom_tag_args($array);

    // カスタム投稿の設定
    register_post_type(
        $array['post_type'],
        $post_args,
    );

    // カスタムタクソノミー（カテゴリー）の登録
    register_taxonomy(
        $array['post_type'] . '-category',  // 1.スラッグ：$term->slug
        $array['post_type'],                // 2.利用する投稿タイプ
        $category_args,                     // 3.オプション
    );

    // カスタムタクソノミー（タグ）の設定
    register_taxonomy(
        $array['post_type'] . '-tag',
        $array['post_type'],
        $tag_args,
    );
}
add_action('hook_create_custom_post', 'usa_create_custom_post', 10, 1);
// ↑ここまで共通

// カスタム投稿の数だけdo_actionを用意する
do_action('hook_create_custom_post', $post_works_array);
