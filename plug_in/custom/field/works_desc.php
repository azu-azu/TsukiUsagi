<?php
/**
* Plugin Name: custom_field_works
* Plugin URI: 
* Description: works説明のカスタムフィールド
* Version: 1.0
* Author: tsukiusagi.biz
* Author URI: https://tsukiusagi.biz
* License: 
*/
//･････････････････････････････････････････････････････
// 作成
//･････････････････････････････････････････････････････
function create_custom_fields_works() {
    add_meta_box(
        'works_description', //divタグ（コンテナ）のID
        'Works説明', //編集画面タイトル
        'insert_custom_fields_works', //($callback)表示用の関数
        'works', //post(投稿) 、page(ページ) 、link(リンク) 、dashboard(ダッシュボード) 、カスタム投稿タイプのスラッグ のいずれか
        'normal' //表示位置 normal(左下), advanced(左下優先順位), side
    );
};
add_action('admin_menu', 'create_custom_fields_works');


//･････････････････････････････････････････････････････
// 表示
//･････････････････････････････････････････････････････
function insert_custom_fields_works() {
    global $post;
    wp_nonce_field(wp_create_nonce(__FILE__), 'my_nonce');
    $product_name = get_post_meta($post->ID, 'my_name', true);//text-input
    $product_url = get_post_meta($post->ID, 'my_url', true);//text-input
    $product_date = get_post_meta($post->ID, 'my_date', true);//text-input
    $product_page = get_post_meta($post->ID, 'my_page', true);//text-area

    $key = 'my_name';
    echo
    '<label for="'.$key.'" style="display:block">プロダクト名</label>
    <input id="'.$key.'" type="text" name="'.$key.'" value="'.esc_html($product_name).'" style="width:600px;margin-bottom:20px">';
    
    $key = 'my_url';
    echo
    '<label for="'.$key.'" style="display:block">プロダクトURL</label>
    <input id="'.$key.'" type="text" name="'.$key.'" value="'.esc_html($product_url).'" style="width:600px;margin-bottom:20px">';

    $key = 'my_date';
    echo
    '<label for="'.$key.'" style="display:block">制作月</label>
    <input id="'.$key.'" type="text" name="'.$key.'" value="'.esc_html($product_date).'" style="width:600px;margin-bottom:20px">';

    $key = 'my_page';
    echo
    '<label for="'.$key.'" style="display:block">コーディング担当ページ：複数の場合は１つずつ改行して入力（,/不要）※文字列に空白は含めないでください</label>
    <textarea id="'.$key.'" type="text" name="'.$key.'" style="width:600px;height:300px;margin-bottom:20px">'.esc_html($product_page).'</textarea>';
};


//･････････････････････････････････････････････････････
// 保存
//･････････････････････････････････････････････････････
function save_custom_fields_works( $post_id ) {
  $my_nonce = isset($_POST['my_nonce']) ? $_POST['my_nonce'] : null;
  if(!wp_verify_nonce($my_nonce, wp_create_nonce(__FILE__))) {
    return $post_id;
  }
  if(defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) { //自動保存の場合はなにもしない
    return $post_id;
  } 
  if(!current_user_can('edit_post', $post_id)) {
    return $post_id;
  }

  $custom_fields = ['my_name', 'my_url', 'my_date', 'my_page'];
  foreach( $custom_fields as $d ) {
    $data = $_POST[$d];
    if (get_post_meta($post_id, $d) == "") {
      add_post_meta($post_id, $d, $data, true);

    } elseif ($data != get_post_meta($post_id, $d, true)) {
      update_post_meta($post_id, $d, $data);

    } elseif ($data == "") {
      delete_post_meta($post_id, $d, get_post_meta($post_id, $d, true));
    }
  }
}
add_action('save_post', 'save_custom_fields_works');


//･････････････････････････････････････････････････････
// 出力
//･････････････････････････････････････････････････････
function product_name_used() {
  if (get_post_type() === 'works') {
    global $post;
    $html   = '';
    $items  = '';
    $items  = get_post_meta( $post->ID, "my_name", true );

    if ( $items ) { //値があった場合にhtmlを出力
      $html  = '<article class="field-part__contents"><h2>product</h2>';
      $html .= '<p class="text">' . esc_html($items) . '</p>';
      $html .= '</article>';
      return $html;
    }
  }
}

function product_url_used() {
  if (get_post_type() === 'works') {
    global $post;
    $html   = '';
    $items  = '';
    $items  = get_post_meta( $post->ID, "my_url", true );

    if ( $items ) {
      $html  = '<article class="field-part__contents"><h2>URL</h2>';
      $html .= '<a class="product-url text" target="_blank" href=' . esc_html($items) . '"';
      $html .= '>' . esc_html($items) . '</a></article>';
      return $html;
    }
  }
}

function product_date_used() {
  if (get_post_type() === 'works') {
    global $post;
    $html   = '';
    $items  = '';
    $items  = get_post_meta( $post->ID, "my_date", true );

    if ( $items ) { //値があった場合にhtmlを出力
      $html  = '<article class="field-part__contents"><h2>制作月</h2>';
      $html .= '<p class="product-date text">' . esc_html($items) . '</p>';
      $html .= '</article>';
      return $html;
    }
  }
}

function product_page_used() {
  if (get_post_type() === 'works') {
    global $post;
    $html   = '';
    $items  = '';
    $items  = get_post_meta( $post->ID, "my_page", true );

    if ( $items ) { //値があった場合にhtmlを出力
      $html  = '<article class="field-part__contents"><h2>コーディング担当ページ</h2>';
      $html .= usa_set_textarea_multiple_lines_data('my_page');
      $html .= '</article>';
      return $html;
    }
  }
}



