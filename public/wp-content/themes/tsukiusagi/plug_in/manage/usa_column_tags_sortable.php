<?php

/**
 * Plugin Name: usa_column_tags_sortable
 * Plugin URI:
 * Description: タグを並び替えられる要素にする
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */


function usa_column_tags_sortable($newcolumn) {
    $columns['tags'] = 'tags';
    return $columns;
}
add_filter('manage_edit-page_sortable_columns', 'usa_column_tags_sortable');
add_filter('manage_edit-post_sortable_columns', 'usa_column_tags_sortable');
