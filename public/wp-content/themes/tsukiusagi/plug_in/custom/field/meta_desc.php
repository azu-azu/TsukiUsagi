<?php

/**
 * Plugin Name: custom_field_desc
 * Plugin URI:
 * Description: 投稿＆固定ページ：ページごとのディスクリプション
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */
//･････････････････････････････････････････････････････
// 作成
//･････････････････････････････････････････････････････
function create_custom_fields_desc() {
  add_meta_box(
    'page_description', //divタグ（コンテナ）のID
    'メタ設定', //編集画面タイトル
    'insert_custom_fields_desc', //($callback)表示用の関数
    'post', //post(投稿) 、page(ページ) 、link(リンク) 、dashboard(ダッシュボード) 、カスタム投稿タイプ（スラッグ）のいずれか
    'normal' //表示位置 normal(左下), advanced(左下優先順位), side
  );
  add_meta_box(
    'page_description', //divタグ（コンテナ）のID
    'メタ設定', //編集画面タイトル
    'insert_custom_fields_desc', //($callback)表示用の関数
    'page', //post(投稿) 、page(ページ) 、link(リンク) 、dashboard(ダッシュボード) 、カスタム投稿タイプ（スラッグ）のいずれか
    'normal' //表示位置 normal(左下), advanced(左下優先順位), side
  );
};
add_action('admin_menu', 'create_custom_fields_desc');


//･････････････････････････････････････････････････････
// 表示
//･････････････････････････････････････････････････････
function insert_custom_fields_desc() {
  global $post;
  $title = get_post_meta($post->ID, 'title', true);
  $keywords = get_post_meta($post->ID, 'keywords', true);
  $description = get_post_meta($post->ID, 'description', true);

  echo '<p>タイトル<br>';
  echo '<input type="text" name="title" value="' . esc_html($title) . '" size="60"></p>';

  echo '<p>キーワード（半角カンマ区切りで基本は５個まで）<br>';
  echo '<input type="text" name="keywords" value="' . esc_html($keywords) . '" size="60"></p>';

  echo '<p>ページの説明（description）160文字以内<br>';
  echo '<input type="text" style="width: 600px;height: 40px;" name="description" value="' . esc_html($description) . '" maxlength="160"></p>';
}


//･････････････････････････････････････････････････････
// 保存
//･････････････････････････････････････････････････････
function save_custom_fields_desc($post_id) {
  if (!empty($_POST['title']))
    update_post_meta($post_id, 'title', $_POST['title']);
  else delete_post_meta($post_id, 'title');

  if (!empty($_POST['keywords']))
    update_post_meta($post_id, 'keywords', $_POST['keywords']);
  else delete_post_meta($post_id, 'keywords');

  if (!empty($_POST['description']))
    update_post_meta($post_id, 'description', $_POST['description']);
  else delete_post_meta($post_id, 'description');
}
add_action('save_post', 'save_custom_fields_desc');


//･････････････････････････････････････････････････････
// カスタムフィールドの値を読み込む
//･････････････････････････････････････････････････････
function page_description() {
  $custom = get_post_custom();

  if (!empty($custom['title'][0])) {
    $title = $custom['title'][0];
  }

  if (!empty($custom['keywords'][0])) {
    $keywords = $custom['keywords'][0];
  }

  if (!empty($custom['description'][0])) {
    $description = $custom['description'][0];
  };

  if (is_front_page() || is_home() || is_page('home') || is_page('about')) {
    echo '<title>' . bloginfo('name') . '</title>
    <meta name="robots" content="index, follow">
    <meta name="keywords" content="">
    <meta name="description" content="' . bloginfo('description') . '">';
  } elseif (is_single()) {
    echo '<title>' . $title . '</title>
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="' . $keywords . '">
      <meta name="description" content="' . $description . '">';
  } elseif (is_page()) {
    echo '<title>' . $title . '</title>
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="">
    <meta name="description" content="' . $description . '">';
  } elseif (is_category()) {
    echo '<title>' . $title . '</title>
    <meta name="robots" content="index, follow" />
    <meta name="description" content="' . single_cat_title() . 'の記事一覧">';
  } elseif (is_tag()) {
    echo '<title>' . $title . '</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="' . single_tag_title() . 'の記事一覧">';
  } elseif (is_404()) {
    echo '<meta name="robots" content="noindex, follow">
    <title>お探しのページが見つかりませんでした</title>
    <meta name="description" content="' . $description . '">';
  } else {
    echo '<meta name="robots" content="noindex, follow">';
  }
}
