<?php

/**
 * Plugin Name: usa_auto_thumbnail
 * Plugin URI:
 * Description: サムネイル登録
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 *
 */
function usa_auto_thumbnail() {
    global $post;
    if (!has_post_thumbnail()) {
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
        } elseif (has_category('git')) {
            $png = "git";
        } else {
            $class = "";
            $png = "default";
        }
    };

    $return = '<img class=' . $class . ' ' . 'src="' . do_shortcode('[uri]') . '/img/thumbnail/' . $png . '.png">';
    $return .= eyecatch_text_used();
    return $return;
}
