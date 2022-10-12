<?php

/**
 * Plugin Name: usa_set_post_views
 * Plugin URI:
 * Description: 閲覧数を取得し、管理画面に閲覧数を表示する
 * PV数を出力したいときにはusa_get_post_viewsを使用
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */

// https://white-sesame.jp/archives/blog/1802
// https://takayakondo.com/wordpress-pv-display/


// single.phpの最下部でアクセス数のカウントを実行
// アクセス数を取得する
if (!function_exists('usa_get_post_views')) {
    function usa_get_post_views($postID) {
        $count_key = 'post_views_count';
        $num = get_post_meta($postID, $count_key, true);
        if ($num == '') {
            delete_post_meta($postID, $count_key);
            add_post_meta($postID, $count_key, '0');
            return "0";
        }
        return $num . '';
    }
}

// アクセス数を保存する
if (!function_exists('usa_set_post_views')) {
    function usa_set_post_views($postID) {
        if (get_option('no_count_post_view')) return;
        $count_key = 'post_views_count';
        $num = get_post_meta($postID, $count_key, true);
        if ($num == '') {
            $num = 0;
            delete_post_meta($postID, $count_key);
            add_post_meta($postID, $count_key, '0');
        } else {
            $num++;
            update_post_meta($postID, $count_key, $num);
        }
    }
}


// 人気記事
if (!function_exists('usa_get_popular_posts')) {
    function usa_get_popular_posts($num = 6) {
        return get_posts(array(
            'post_type' => 'any',
            'numberposts' => $num,
            'meta_key' => 'post_views_count',
            'orderby' => 'meta_value_num',
            'order' => 'DESC',
            // 'exclude' => '' // ランキングから除外する投稿ID
        ));
    }
}


// アクセスがBOTかどうか判断する関数
if (!function_exists('is_bot')) {
    function is_bot() {
        $ua = $_SERVER['HTTP_USER_AGENT'];
        $bots = array(
            'Googlebot',
            'Yahoo! Slurp',
            'Mediapartners-Google',
            'msnbot',
            'bingbot',
            'MJ12bot',
            'Ezooms',
            'pirst; MSIE 8.0;',
            'Google Web Preview',
            'ia_archiver',
            'Sogou web spider',
            'Googlebot-Mobile',
            'AhrefsBot',
            'YandexBot',
            'Purebot',
            'Baiduspider',
            'UnwindFetchor',
            'TweetmemeBot',
            'MetaURI',
            'PaperLiBot',
            'Showyoubot',
            'JS-Kit',
            'PostRank',
            'Crowsnest',
            'PycURL',
            'bitlybot',
            'Hatena',
            'facebookexternalhit',
            'NINJA bot',
            'YahooCacheSystem',
        );
        foreach ($bots as $bot) {
            if (stripos($ua, $bot) !== false) {
                return true;
            }
        }
        return false;
    }
}



// 管理画面に閲覧数項目を追加する
function count_add_column($columns) {
    $columns['views'] = '閲覧数';
    return $columns;
}
add_filter('manage_pages_columns', 'count_add_column');
add_filter('manage_posts_columns', 'count_add_column');

// 管理画面にページビュー数を表示する
function count_add_column_data($column, $post_id) {
    switch ($column) {
        case 'views':
            echo usa_get_post_views($post_id);
            break;
    }
}
add_action('manage_pages_custom_column', 'count_add_column_data', 10, 2);
add_action('manage_posts_custom_column', 'count_add_column_data', 10, 2);


// 閲覧数項目を並び替えれる要素にする
function column_views_sortable($newcolumn) {
    $columns['views'] = 'views';
    return $columns;
}
add_filter('manage_edit-page_sortable_columns', 'column_views_sortable');
add_filter('manage_edit-post_sortable_columns', 'column_views_sortable');

// ページビュー数で並び替えるようにリクエストを送る
function sort_views_column($vars) {
    if (isset($vars['orderby']) && 'views' == $vars['orderby']) {
        $vars = array_merge(
            $vars,
            array(
                'meta_key' => 'post_views_count', //Custom field key
                'orderby' => 'meta_value_num'
            ) //Custom field value (number)
        );
    }
    return $vars;
}
add_filter('request', 'sort_views_column');
