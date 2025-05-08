<?php

/**
 * Plugin Name: eyecatch_text
 * Plugin URI:
 * Description: キャッチ画像の文字入れ
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 */
//･････････････････････････････････････････････････････
// 作成
//･････････････････････････････････････････････････････
function create_custom_fields_eyecatch_text() {
    add_meta_box(
        'eyecatch_text', //divタグ（コンテナ）のID
        'キャッチ画像の文字入れ', //編集画面タイトル
        'insert_custom_fields_eyecatch_text', //($callback)表示用の関数
        'post', //post(投稿) 、page(ページ) 、link(リンク) 、dashboard(ダッシュボード) 、カスタム投稿タイプのスラッグ のいずれか
        'side' //表示位置 normal(左下), advanced(左下優先順位), side
    );
};
add_action('admin_menu', 'create_custom_fields_eyecatch_text');


//･････････････････････････････････････････････････････
// 表示
//･････････････････････････････････････････････････････
function insert_custom_fields_eyecatch_text() {
    global $post;
    wp_nonce_field(wp_create_nonce(__FILE__), 'my_nonce');
    $text1 = get_post_meta($post->ID, 'text1', true); //text-input
    $text2 = get_post_meta($post->ID, 'text2', true); //text-input
    $text3 = get_post_meta($post->ID, 'text3', true); //text-input

    $key = 'text1';
    echo
    '<label for="' . $key . '" style="display:block">1</label>
    <input id="' . $key . '" type="text" name="' . $key . '" value="' . esc_html($text1) . '" style="margin-bottom:20px">';

    $key = 'text2';
    echo
    '<label for="' . $key . '" style="display:block">2</label>
    <input id="' . $key . '" type="text" name="' . $key . '" value="' . esc_html($text2) . '" style="margin-bottom:20px">';

    $key = 'text3';
    echo
    '<label for="' . $key . '" style="display:block">3</label>
    <input id="' . $key . '" type="text" name="' . $key . '" value="' . esc_html($text3) . '" style="margin-bottom:20px">';
};


//･････････････････････････････････････････････････････
// 保存
//･････････････････････････････････････････････････････
function save_custom_fields_eyecatch_text($post_id) {
    $my_nonce = isset($_POST['my_nonce']) ? $_POST['my_nonce'] : null;
    if (!wp_verify_nonce($my_nonce, wp_create_nonce(__FILE__))) {
        return $post_id;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) { //自動保存の場合はなにもしない
        return $post_id;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return $post_id;
    }

    $custom_fields = ['text1', 'text2', 'text3'];
    foreach ($custom_fields as $d) {
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
add_action('save_post', 'save_custom_fields_eyecatch_text');


//･････････････････････････････････････････････････････
// 出力
//･････････････････････････････････････････････････････
function eyecatch_text_used() {
    if (get_post_type() === 'post') {
        global $post;
        $html   = '';
        $item1  = '';
        $item1  = get_post_meta($post->ID, "text1", true);
        $item2  = '';
        $item2  = get_post_meta($post->ID, "text2", true);
        $item3  = '';
        $item3  = get_post_meta($post->ID, "text3", true);

        if ($item1) {
            $html = '<figcaption class="c-eye-catch-text"><span>' . esc_html($item1) . '</span>';
            if ($item2) {
                $html .= '<span>' . esc_html($item2) . '</span>';
            }
            if ($item3) {
                $html .= '<span>' . esc_html($item3) . '</span>';
            }
            $html .= '</figcaption>';
            return $html;
        }
    }
}
