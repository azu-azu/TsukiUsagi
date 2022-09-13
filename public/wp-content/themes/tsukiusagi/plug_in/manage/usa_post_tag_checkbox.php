<?php
/**
* Plugin Name: usa_post_tag_checkbox
* Plugin URI: 
* Description: 投稿のタグをチェックボックスで選択できるようにする（ブロックエディタ・クラシックエディタ両方適用）
* Version: 1.0
* Author: tsukiusagi.biz
* Author URI: https://tsukiusagi.biz
* License: 
* 
* 
*/
function change_post_tag_to_checkbox() {
  $args = get_taxonomy('post_tag');
  $args -> hierarchical = true;//Gutenberg用
  $args -> meta_box_cb = 'post_categories_meta_box';//Classicエディタ用
  register_taxonomy( 'post_tag', 'post', $args);
}
add_action( 'init', 'change_post_tag_to_checkbox', 1 );