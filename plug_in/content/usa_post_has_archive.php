<?php

/**
 * Plugin Name: usa_post_has_archive
 * Plugin URI:
 * Description: 投稿のアーカイブページを作成する
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */
function usa_post_has_archive($args, $post_type) {
    if ('post' == $post_type) {
        $args['rewrite'] = true; // リライトを有効にする
        $args['has_archive'] = 'blog'; // 任意のスラッグ名
    }
    return $args;
}
add_filter('register_post_type_args', 'usa_post_has_archive', 10, 2);
