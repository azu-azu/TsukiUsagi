<?php

// 参考 https://www.webopixel.net/wordpress/436.html

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
            <input id="upload_image" type="text" size="36" name="Cat_meta[img]" value="<?php if (isset($cat_meta['img'])) echo esc_html($cat_meta['img']) ?>" /><br />
            画像を追加: <img src="images/media-button-other.gif" alt="画像を追加" id="upload_image_button" value="Upload Image" style="cursor:pointer;" />
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
        wp_enqueue_script('media-upload');
        wp_enqueue_script('thickbox');
        wp_register_script('my-upload', get_template_directory_uri() . '/js/manage/myUpload.js');
        wp_enqueue_script('my-upload');
    }
}
function usa_admin_styles() {
    global $taxonomy;
    if ('category' == $taxonomy) {
        wp_enqueue_style('thickbox');
    }
}
add_action('admin_print_scripts', 'usa_admin_scripts');
add_action('admin_print_styles', 'usa_admin_styles');

// ※get_bloginfo('template_directory')は非推奨