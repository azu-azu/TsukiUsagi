<?php

/**
 * Plugin Name: usa_set_heading_linear_show
 * Plugin URI:
 * Description: タイトル設定 c-linear-light, js-scroll-showを使用
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * @param string $heading_num：heading_number（h1/h2）
 * @param string $my_title：題名
 * @param string $type：page/sec/list（ページタイトル/セクションタイトル/リストタイトル）
 * @param string $url：アーカイブ一覧のurl(デフォルトは無し)
 *
 * 呼び出し例）echo usa_set_heading_linear_show('h2', 'Contact', 'sec');
 *
 */
function usa_set_heading_linear_show($heading_num, $my_title, $type, $url = "") {
    echo '<section class="p-title ' . $type . '">';

    if (!$url == "") {
        echo '<a class="c-back-shadow--white" href="' . $url . '">';
    }

    switch ($type) {
        case 'single':
            $pseudo = 'c-title--page c-pseudo--page-ttl';
            break;

        case 'page':
            $pseudo = 'c-title--page c-pseudo--page-ttl';
            break;

        case 'sec':
            $pseudo = 'c-title--section c-pseudo--sec-ttl';
            break;

        case 'list':
            $pseudo = 'c-title--section c-pseudo--list-ttl';
            break;
    }

    echo '<' . $heading_num . ' class="' . $pseudo . ' c-anim-box--down txt js-scroll-show">';
    echo $my_title;
    echo '</' . $heading_num . '>';

    if (!$url == "") {
        echo '</a>';
    }

    echo '</section>';
}
