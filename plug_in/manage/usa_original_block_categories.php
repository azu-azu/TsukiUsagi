<?php

/**
 * Plugin Name: usa_original_block_categories
 * Plugin URI:
 * Description: ブロックエディタにブロックカテゴリーを追加
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 * @param Array  $categories 現在登録済みのカテゴリー.
 * @param String $post 記事.
 */
function usa_original_block_categories($categories, $editor_context) {
    if (!empty($editor_context->post)) {
        array_push(
            $categories,
            array(
                'slug'  => 'usagi', // 投稿などのslugのようなもの（他とかぶらないように注意）
                'title' => 'tsuki-usagi-blocks', // カテゴリーの表示名（アコーディオンの開閉部分に表示される）
                'icon'  => 'star-filled', // titleの右隣に表示されるアイコン
            )
        );
    }
    return $categories;
}
add_filter('block_categories_all', 'usa_original_block_categories', 10, 2);
