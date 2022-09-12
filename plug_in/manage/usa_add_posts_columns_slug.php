<?php

/**
 * Plugin Name: usa_add_posts_columns_slug
 * Plugin URI:
 * Description: 記事一覧にスラッグを表示する
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */

function usa_add_posts_columns_slug($columns) {
    $columns['slug'] = 'スラッグ';
    return $columns;
}
function usa_add_posts_columns_slug_row($column_name, $post_id) {
    if ($column_name == 'slug') {
        $slug = get_post($post_id)->post_name;
        echo esc_attr($slug);
    }
}
add_filter('manage_posts_columns', 'usa_add_posts_columns_slug');
add_action('manage_posts_custom_column', 'usa_add_posts_columns_slug_row', 10, 2);
