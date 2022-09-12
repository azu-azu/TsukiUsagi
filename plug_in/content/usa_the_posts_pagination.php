<?php

/**
 * Plugin Name: usa_the_posts_pagination
 * Plugin URI:
 * Description: ページネーションにクラス付与
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */
function usa_the_posts_pagination($template) {
    $template = '
    <nav class="p-pagination" role="navigation">
    <section class="p-pagination__container">
    <h2 class="screen-reader-text">%2$s</h2>
    %3$s
    </section>
    </nav>
    ';
    return $template;
}
add_filter('navigation_markup_template', 'usa_the_posts_pagination');
