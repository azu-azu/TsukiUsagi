<?php

/**
 * Plugin Name: usa_add_tax_columns
 * Plugin URI:
 * Description: 投稿とアーカイブのサムネイル自動設定
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * 参考↓
 * https://wemo.tech/2342
 * https://daily.glocalism.jp/2017/02/07/add-column-to-admin-terms-list/
 */

// カラム設置
function usa_add_tax_columns($columns) {
    $index = 4; // 追加位置

    return array_merge(
        array_slice($columns, 0, $index),
        // カラム名
        array(
            'id' => 'ID',
            'image' => '画像'
        ),
        array_slice($columns, $index)
    );
}
add_filter('manage_edit-category_columns', 'usa_add_tax_columns');
add_filter('manage_edit-post_tag_columns', 'usa_add_tax_columns');


// 表示設定
function add_taxonomy_custom_fields($content, $column_name, $term_id) {
    if ('id' === $column_name) {
        echo $term_id;
    }
    if ('image' === $column_name) {
        $cat_data = get_option('cat_' . intval($term_id));
        if ($cat_data) {
            echo '<img src="' . esc_html($cat_data['img']) . '" style="width: 50%;">';
        }
    }
}
add_action('manage_category_custom_column', 'add_taxonomy_custom_fields', 10, 3);
add_action('manage_post_tag_custom_column', 'add_taxonomy_custom_fields', 10, 3);

// ソートを可能にする
function sort_taxonomy_columns($columns) {
    $columns['id'] = 'ID';
    return $columns;
}
add_filter('manage_edit-category_sortable_columns', 'sort_taxonomy_columns');
add_filter('manage_edit-post_tag_sortable_columns', 'sort_taxonomy_columns');


// 固定ページ：manage_pages_columns、
// 投稿：manage_posts_columns、
// カスタム投稿：manage_posts_columns、または、manage_${post_type}_posts_columns
