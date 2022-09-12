<?php
/**
* Plugin Name: custom_field_works_environment
* Plugin URI: 
* Description: チェックボックスのカスタムフィールド
* Version: 1.0
* Author: tsukiusagi.biz
* Author URI: https://tsukiusagi.biz
* License: 
*/
//･････････････････････････････････････････････････････
// 作成
//･････････････････････････････････････････････････････
function create_custom_fields_works_environment() {
    add_meta_box(
        'environment', //divタグ（コンテナ）のID
        '制作環境', //編集画面タイトル
        'insert_custom_fields_works_environment', //($callback)表示用の関数
        'works', //post(投稿) 、page(ページ) 、link(リンク) 、dashboard(ダッシュボード) 、カスタム投稿タイプのスラッグ のいずれか
        'normal' //表示位置 normal(左下), advanced(左下優先順位), side
    );
}
add_action( 'admin_menu', 'create_custom_fields_works_environment' );


//･････････････････････････････････････････････････････
// 表示
//･････････････････････････････････････････････････････
function insert_custom_fields_works_environment() {
    $keyname = 'my_environment';
    global $post;
    $get_vals = get_post_meta( $post->ID, $keyname, true );// 保存されているカスタムフィールドの値を取得
    $get_value = $get_vals ? $get_vals : array();

    // radioの値
    $data = [
        'HTML', 
        'CSS',
        'PHP',
        'JavaScript',
        'jQuery',
        'Sass(SCSS)',
        'git',
        'gulp',
        'VSCode',
        'Adobe XD',
        'Adobe Illustrator',
    ];

    wp_nonce_field( 'action-' . $keyname, 'nonce-' . $keyname );// nonceの追加

    // HTML出力
    foreach( $data as $d ) {
        $checked = '';
        if( in_array( $d, $get_value ) ) $checked = ' checked';
        echo '
        <label style="display:inline-block;margin-bottom:20px;padding-right:10px">
            <input type="checkbox" style="width:20px;height:20px" name="' . $keyname . '[]" value="' . $d . '"' . $checked . '>' . $d . '
        </label>';
    }
}


//･････････････････････････････････････････････････････
// 保存
//･････････････････････････････････････････････････････
function save_custom_field( $post_id ) {
    $custom_fields = ['my_environment'];

    foreach( $custom_fields as $d ) {
        if ( isset( $_POST['nonce-' . $d] ) && $_POST['nonce-' . $d] ) {
            if( check_admin_referer( 'action-' . $d, 'nonce-' . $d ) ) {

                if( isset( $_POST[$d] ) && $_POST[$d] ) {
                    update_post_meta( $post_id, $d, $_POST[$d] );
                } else {
                    delete_post_meta( $post_id, $d, get_post_meta( $post_id, $d, true ) );
                }
            }
        }
    }
}
add_action( 'save_post', 'save_custom_field' );


//･････････････････････････････････････････････････････
// 出力
//･････････････････････････････････････････････････････
function product_environment_used() {
    if (get_post_type() === 'works') {
        global $post;
        $html   = '';
        $items  = '';
        $items  = get_post_meta( $post->ID, "my_environment", true );

        if ( is_array($items) ) {
            $html  = '<article class="field-part__contents"><h2>制作環境</h2>';
            $html .= '<ul class="field-list">';

            foreach ( $items as $value ) {
                if ( !$value == '') {
                    $html .= '<li><p class="text">' . esc_html($value) . '</p></li>';
                }
            }
            $html .= '</ul></article>';
            return $html;
        }
    }
}