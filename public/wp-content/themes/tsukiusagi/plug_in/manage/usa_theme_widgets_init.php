<?php

/**
 * Plugin Name: usa_theme_widgets_init
 * Plugin URI:
 * Description: ウィジェットを表示する
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */

function usa_theme_widgets_init() {
    register_sidebar(array(
        'name' => 'side-bar',
        'id' => 'category-nav',
        'before_widget' => '<nav class="p-category-nav">',
        'after_widget' => '</nav>',
        'before_title' => '<h3 class="side-title c-bg--cosmos">',
        'after_title'  => '</h3>',
    ));
}
add_action('widgets_init', 'usa_theme_widgets_init');
