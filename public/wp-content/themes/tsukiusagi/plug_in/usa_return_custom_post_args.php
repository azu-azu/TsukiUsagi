<?php
/**
* Plugin Name: custom_post
* Plugin URI: 
* Description: カスタム投稿作成
* Version: 1.0
* Author: tsukiusagi.biz
* Author URI: https://tsukiusagi.biz
* License: 
* 
* @param array $array：スラッグ、名前、アイコン
* 
*/

function usa_return_custom_post_args($array){
    $post_type = $array['post_type'];
    $name = $array['name'];
    $icon = $array['icon'];

    $supports = array(
        'title', //タイトルフォーム
        'editor', //エディター(内容の編集)
        'thumbnail', //アイキャッチ画像
        'revisions', //リビジョンを保存
    );
    $args = array(
        'labels' => [
            'name'          => $name,
            'singular_name' => $post_type,
        ],
        'public'        => true,
        'has_archive'   => true,
        'menu_position' => 5,
        'rewrite'       => array('slug' =>$post_type, 'with_front' => false),
        'show_in_rest'  => true,  // true:「Gutenberg」/ false:「ClassicEditor」
        'menu_icon' => $icon,
        'supports'      => $supports
    );
    return $args;
}
