<?php

/**
 * Plugin Name: no_self_ping
 * Plugin URI:
 * Description: セルフピンバックを除外する（内部リンクを貼ったときのコメント自動送信を防ぐ）
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */
function no_self_ping(&$links) {
    $home = get_option('home');
    foreach ($links as $l => $link)
        if (0 === strpos($link, $home))
            unset($links[$l]);
}
add_action('pre_ping', 'no_self_ping');
