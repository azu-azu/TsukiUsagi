<?php

// 参考
// https://www.webopixel.net/wordpress/436.html
// https://nelog.jp/media-uploader-javascript-api
// https://www.torat.jp/wordpress-image-uploader/

/**
 * Plugin Name: usa_add_tax_upload_image
 * Plugin URI:
 * Description: カテゴリ画面に画像アップロードを追加
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */

// 見た目を追加
function usa_add_tax_upload_image($tag) {
    $t_id = $tag->term_id;
    $cat_meta = get_option("cat_$t_id");
?>
    <tr class="form-field">
        <th><label for="upload_image">画像URL</label></th>
        <td>
            <input type="text" name="Cat_meta[img]" value="<?php if (isset($cat_meta['img'])) echo esc_html($cat_meta['img']) ?>" id="upload_image" />
            <input type="button" name="media-upload" value="画像をアップロード" id="js-media-btn" />
            <input type="button" name="media-clear" value="画像を削除" id="js-media-remove-btn" />
            <div id="thumbnail" class="form-field thumbnail">
                <img class="uploded-thumbnail" src="<?php if (isset($cat_meta['img'])) echo esc_html($cat_meta['img']) ?>" alt="選択中の画像">
            </div>
        </td>
    </tr>
<?php
}
add_action('edit_category_form_fields', 'usa_add_tax_upload_image');



// 保存処理
function usa_save_extra_category_fileds($term_id) {
    if (isset($_POST['Cat_meta'])) {
        $t_id = $term_id;
        $cat_meta = get_option("cat_$t_id");
        $cat_keys = array_keys($_POST['Cat_meta']);
        foreach ($cat_keys as $key) {
            if (isset($_POST['Cat_meta'][$key])) {
                $cat_meta[$key] = $_POST['Cat_meta'][$key];
            }
        }
        update_option("cat_$t_id", $cat_meta);
    }
}
add_action('edited_term', 'usa_save_extra_category_fileds');

// 画像アップのための処理
function usa_admin_scripts() {
    global $taxonomy;
    if ('category' == $taxonomy) {
        wp_enqueue_media();
        wp_register_script('my-upload', get_template_directory_uri() . '/js/manage/myUpload.js');
        wp_enqueue_script('my-upload');
    }
}
add_action('admin_print_scripts', 'usa_admin_scripts');
