<?php

/**
 * Plugin Name: usa_set_post_views
 * Plugin URI:
 * Description: 管理画面に閲覧数を表示する
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */

// https://white-sesame.jp/archives/blog/1802
// https://takayakondo.com/wordpress-pv-display/


//  投稿の閲覧数を設定する
function usa_set_post_views() {
    $post_id = get_the_ID();
    $custom_key = 'post_views_count';
    $view_count = get_post_meta($post_id, $custom_key, true);
    // カスタムフィールドにメタデータが存在しているかどうかで分岐させる
    if ($view_count === '') {    //存在しない
        delete_post_meta($post_id, $custom_key);
        add_post_meta($post_id, $custom_key, '0');
    } else {    //存在する
        $view_count++;
        update_post_meta($post_id, $custom_key, $view_count);
    }
}

//  投稿の閲覧数を出力する
function usa_get_post_views($post_id = null) {
    $post_id = $post_id ? $post_id : get_the_ID();
    $custom_key = 'post_views_count';
    $view_count = get_post_meta($post_id, $custom_key, true);
    //　メタデータが存在していなかった場合の処理をする
    if ($view_count === '') {
        delete_post_meta($post_id, $custom_key);
        add_post_meta($post_id, $custom_key, '0');
        $view_count = 0;
    }
    return $view_count;
}

// クローラーのアクセスを判断
function is_bot() {
    $ua = $_SERVER["HTTP_USER_AGENT"];
    $bot = array(
        "googlebot",
        "msnbot",
        "yahoo",
        "AdsBot-Google",       //必要ならば
        "AdsBot-Google-Mobile", //必要ならば
        "Twitterbot",
    );
    foreach ($bot as $bot) {
        if (stripes($ua, $bot) !== false) {
            return true;
        }
    }
    return false;
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



// // ページビュー数のカウンターのセット
// function usa_set_post_views($postID) {
//     $count_key = 'post_views_count';
//     $count = get_post_meta($postID, $count_key, true);
//     if ($count == '') {
//         $count = 0;
//         delete_post_meta($postID, $count_key);
//         add_post_meta($postID, $count_key, '0');
//     } else {
//         $count++;
//         update_post_meta($postID, $count_key, $count);
//     }
// }
// // ページビュー数を取得する
// function usa_get_post_views($postID) {
//     $count_key = 'post_views_count';
//     $count = get_post_meta($postID, $count_key, true);
//     if ($count == '') {
//         delete_post_meta($postID, $count_key);
//         add_post_meta($postID, $count_key, '0');
//         return "0";
//     }
//     return $count;
// }
// // 管理画面に閲覧数項目を追加する
// add_filter('manage_pages_columns', 'count_add_column');
// add_filter('manage_posts_columns', 'count_add_column');
// function count_add_column($columns) {
//     $columns['views'] = '閲覧数';
//     return $columns;
// }

// // 管理画面にページビュー数を表示する
// add_action('manage_pages_custom_column', 'count_add_column_data', 10, 2);
// add_action('manage_posts_custom_column', 'count_add_column_data', 10, 2);
// function count_add_column_data($column, $post_id) {
//     switch ($column) {
//         case 'views':
//             echo usa_get_post_views($post_id);
//             break;
//     }
// }

// // 閲覧数項目を並び替えれる要素にする
// add_filter('manage_edit-page_sortable_columns', 'column_views_sortable');
// add_filter('manage_edit-post_sortable_columns', 'column_views_sortable');
// function column_views_sortable($newcolumn) {
//     $columns['views'] = 'views';
//     return $columns;
// }

// // ページビュー数で並び替えるようにリクエストを送る
// add_filter('request', 'sort_views_column');
// function sort_views_column($vars) {
//     if (isset($vars['orderby']) && 'views' == $vars['orderby']) {
//         $vars = array_merge(
//             $vars,
//             array(
//                 'meta_key' => 'post_views_count', //Custom field key
//                 'orderby' => 'meta_value_num'
//             ) //Custom field value (number)
//         );
//     }
//     return $vars;
// }
