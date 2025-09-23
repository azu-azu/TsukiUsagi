<?php

/**
 * Plugin Name: usa_set_breadcrumb
 * Plugin URI:
 * Description: パンくずリストの出力
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 */

if (!function_exists('usa_set_breadcrumb')) {
    function usa_set_breadcrumb() {
        if (is_home() || is_admin()) return; // トップページ、管理画面では表示しない
        $home = esc_url(home_url('/')) . '/blog';
        $str = '<nav class="c-breadcrumb"><ul itemscope itemtype="http://schema.org/BreadcrumbList">';
        $str .= usa_bread_item("TsukiUsagiBlog", $home, "1"); // ホームは共通して表示
        if (is_single()) {
            $str .= usa_get_bread_single();
        } elseif (is_category()) {
            $str .= usa_get_bread_category();
        } elseif (is_tag()) {
            $str .= '<li><i class="fa fa-tag"></i> タグ</li>';
        } else {
            $str .= '<li>' . wp_title('', false) . '</li>';
        }
        $str .= '</ul></nav>';
        echo $str;
    }
}

// パンくずリスト内の1つ1つのリンクを生成
if (!function_exists('usa_bread_item')) {
    function usa_bread_item($name, $url, $position = "1") {
        return '
        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        <a href="' . $url . '" itemprop="item">
        <span itemprop="name">' . $name . '</span>
        </a>
        <meta itemprop="position" content="' . $position . '" />
        </li>';
    }
}

// 投稿ページ用リスト
if (!function_exists('usa_get_bread_single')) {
    function usa_get_bread_single() {
        global $post;
        $categories = get_the_category($post->ID);
        if (!$categories) return '';
        $result = '';
        $cat = $categories[0];
        if ($cat->parent != 0) {
            $ancestors = array_reverse(get_ancestors($cat->cat_ID, 'category'));
            $result = usa_bread_loop($ancestors);
        }

        // resultにカテゴリを追加
        $i = 2;
        $result .= usa_bread_item(esc_attr($cat->cat_name), esc_url(get_category_link($cat->term_id)), $i);
        return $result;
    }
}

// カテゴリ用リスト
if (!function_exists('usa_get_bread_category')) {
    function usa_get_bread_category() {
        $cat = get_queried_object();
        if ($cat->parent == 0) return '';
        $ancestors = array_reverse(get_ancestors($cat->cat_ID, 'category'));
        $result = usa_bread_loop($ancestors);
        return $result;
    }
}

if (!function_exists('usa_bread_loop')) {
    function usa_bread_loop($ancestors) {
        $result = '';
        $i = 2;
        foreach ($ancestors as $ancestor) {
            $result .= usa_bread_item(esc_attr(get_cat_name($ancestor)), esc_url(get_category_link($ancestor)), $i);
            $i++;
        }
        return $result;
    }
}




            // } elseif (is_page()) {
            //     $str .= usa_get_bread_page();
            // } elseif (is_date()) {
            //     $str .= usa_get_bread_date();
            // } elseif (is_author()) {
            //     $str .= '<li>著者</li>';

// 固定ページ用リスト
// if (!function_exists('usa_get_bread_page')) {
//     function usa_get_bread_page() {
//         global $post;
//         if ($post->post_parent == 0) return '';
//         $ancestors = array_reverse(get_post_ancestors($post->ID));
//         $i = 2;
//         $result = '';
//         foreach ($ancestors as $ancestor) {
//             $result .= usa_bread_item(esc_attr(get_the_title($ancestor)), esc_url(get_permalink($ancestor)), $i);
//             $i++;
//         }
//         return $result;
//     }
// }


// 日付用リスト
// if (!function_exists('usa_get_bread_date')) {
//     function usa_get_bread_date() {
//         // 日付ページ
//         $result = '';
//         $year = get_query_var('year');
//         if (is_day() || is_month()) {
//             $result .= usa_bread_item($year . '年', get_year_link($year), "2");
//         }
//         if (is_day()) {
//             $result .= usa_bread_item(get_query_var('monthnum') . '月', get_month_link($year, get_query_var('monthnum')), "3");
//         }
//         return $result;
//     }
// }