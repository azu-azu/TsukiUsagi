<?php
/**
* Plugin Name: custom_post
* Plugin URI: 
* Description: カスタムタクソノミー追加
* Version: 1.0
* Author: tsukiusagi.biz
* Author URI: https://tsukiusagi.biz
* License: 
* 
* @param array $array：スラッグ、名前
* 
*/
function usa_return_custom_cat_args($array){
    $name = $array['name'];
    $args = array(
        'hierarchical' => true,
        'label' => $name.'のカテゴリー', 
        'public' => true,
        'show_in_rest' => true //管理画面に追加
    );
    return $args;
}