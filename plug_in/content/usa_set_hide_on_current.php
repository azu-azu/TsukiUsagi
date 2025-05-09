<?php

/**
 * Plugin Name: usa_set_hide_on_current
 * Plugin URI:
 * Description: currentにいる場合は非表示にする(例：メニューのカテゴリ別ページ)
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */

function usa_set_hide_on_current($classes, $item, $args) {
    if (in_array('hide-on-current', $classes)) {
        if (in_array('current-menu-item', $classes)) {
            // 「今このカスタムリンクがアクティブや」ってとき
            $classes[] = 'is-none';
        }
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'usa_set_hide_on_current', 10, 3);
