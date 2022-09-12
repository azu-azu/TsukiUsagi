<?php

/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Tsuki_Usagi
 * @since Tsuki_Usagi 1.0
 */

/**
 * テーマサポート
 */
add_theme_support('title-tag'); // タイトル
add_theme_support('post-thumbnails'); //アイキャッチ画像を扱う
add_theme_support('automatic-feed-links'); //フィードの利用を許可する
add_theme_support('custom-background'); //カスタム背景機能をサポートする
add_theme_support('wp-block-styles'); //ブロックエディターのスタイルを適用
add_theme_support('responsive-embeds'); //挿入した動画などがレスポンシブ対応（画面幅に応じてサイズが拡大・縮小）になる
add_theme_support('html5', array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption')); //コメントフォーム、検索フォーム、コメントリスト、ギャラリーでHTML5マークアップの使用を許可
add_theme_support('custom-header'); //カスタムヘッダー


/**
 * uri指定のショートコード
 */
function shortcode_tp() {
    return get_template_directory_uri();
}
add_shortcode('uri', 'shortcode_tp');


/**
 * スタイルシートを読み込む
 */
// グーグルフォント
function my_enqueue_scripts() {
    wp_enqueue_style(
        'my-style-handle',
        'https://fonts.googleapis.com',
        array(),
        null
    );
    wp_enqueue_style(
        'my-style-handle',
        'https://fonts.gstatic.com',
        array(),
        null
    );
}
add_action('wp_enqueue_scripts', 'my_enqueue_scripts');

function my_style_loader_tag_filter($html, $handle) {
    if ($handle === 'my-style-handle') {
        return str_replace(
            "rel='stylesheet'",
            "rel='preconnect' type='https://fonts.googleapis.com'",
            $html
        );
    }
    if ($handle === 'my-style-handle') {
        return str_replace(
            "rel='stylesheet'",
            "rel='preconnect' type='https://fonts.gstatic.com' crossorigin",
            $html
        );
    }
    return $html;
}
add_filter('style_loader_tag', 'my_style_loader_tag_filter', 10, 2);


function tsukiusagi_script() {
    wp_enqueue_style('font-awesome', '//use.fontawesome.com/releases/v5.6.1/css/all.css', array()); //フォントオーサム
    wp_enqueue_style('m-plus-round-1p', 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500&display=swap', array(), '', '');
    wp_enqueue_style('gluten', 'https://fonts.googleapis.com/css2?family=Gluten:wght@100&display=swap', array(), '', '');
    wp_enqueue_style('noto-sans', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap', array(), '', '');
    wp_enqueue_style('m-plus-1p', 'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400&display=swap', array(), '', '');
    wp_enqueue_style('xmas', 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap', array(), '', '');
    wp_enqueue_style('ress', 'https://unpkg.com/ress/dist/ress.min.css', array(), '1.0.0', '');
    wp_enqueue_style('style-css', get_template_directory_uri() . '/css/style.css', array(), date("YmdHi"), '');
    wp_enqueue_style('style', get_template_directory_uri() . '/style.css', array(), date("YmdHi"), '');
}
add_action('wp_enqueue_scripts', 'tsukiusagi_script');



/**
 * jsを読み込む（true:フッターで読み込み/第四引数：キャッシュ自動クリア）
 */
// 本体のjQueryをストップ
function my_delete_local_jquery() {
    wp_deregister_script('jquery');
}
add_action('wp_enqueue_scripts', 'my_delete_local_jquery');

wp_enqueue_script('jquery360', get_template_directory_uri() . '/js/lib/jquery-3.6.0.min.js', array(), '', true);

// ページごとに読み込みファイルを変える
function file_load_scripts_styles() {
    if (is_front_page() || is_home() || is_page('home')) {
        wp_enqueue_script('swiper-bundle', '//unpkg.com/swiper/swiper-bundle.min.js', array(), '', true);
        wp_enqueue_script('bundle', get_template_directory_uri() . '/js/bundle.js', array(), date("YmdHi"), true);
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/parts/myHamburger.js', array(), '', true);
        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
        wp_enqueue_script('scroll-show', get_template_directory_uri() . '/js/parts/myScrollShow.js', array(), '', true); //スクロールしたらふわっと動くjs
        wp_enqueue_script('playing-box', get_template_directory_uri() . '/js/parts/myPlayingBox.js', array(), '', true);
        wp_enqueue_script('falling-box', get_template_directory_uri() . '/js/parts/myFallingBox.js', array(), '', true);
    }
    if (is_single()) {
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/parts/myHamburger.js', array(), '', true);
        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
        wp_enqueue_script('scroll-show', get_template_directory_uri() . '/js/parts/myScrollShow.js', array(), '', true);
        wp_enqueue_script('particles-min', get_template_directory_uri() . '/js/lib/particles.min.js', array(), '', true);
        wp_enqueue_script('sea-stars', get_template_directory_uri() . '/js/parts/mySeaStars.js', array(), 'particles-min', true); // 海の星
    }
    if (is_page()) {
        wp_enqueue_script('scroll-show', get_template_directory_uri() . '/js/parts/myScrollShow.js', array(), '', true);
        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
        wp_enqueue_script('particles-min', get_template_directory_uri() . '/js/lib/particles.min.js', array(), '', true);
        wp_enqueue_script('sea-stars', get_template_directory_uri() . '/js/parts/mySeaStars.js', array(), 'particles-min', true); // 海の星
    }
    if (is_page('policy')) {
        wp_enqueue_script('canvas-shooting-stars', get_template_directory_uri() . '/js/parts/myCanvasShootingStars.js', array(), '', true);
    }
    if (is_archive()) {
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/parts/myHamburger.js', array(), '', true);
        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
        wp_enqueue_script('scroll-show', get_template_directory_uri() . '/js/parts/myScrollShow.js', array(), '', true);
        wp_enqueue_script('particles-min', get_template_directory_uri() . '/js/lib/particles.min.js', array(), '', true);
        wp_enqueue_script('sea-stars', get_template_directory_uri() . '/js/parts/mySeaStars.js', array(), 'particles-min', true); // 海の星
    }
    if (is_404()) {
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/parts/myHamburger.js', array(), '', true);
        wp_enqueue_script('scroll-show', get_template_directory_uri() . '/js/parts/myScrollShow.js', array(), '', true);
        wp_enqueue_script('canvas-star-orbit', get_template_directory_uri() . '/js/parts/myStarOrbit.js', array(), '', true);
        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
    }
}
add_action('wp_footer', 'file_load_scripts_styles'); // wp_footerに処理を登録



/**
 * プラグイン
 */
// カスタム投稿｜設定
include(get_template_directory() . '/plug_in/usa_return_custom_post_args.php');
include(get_template_directory() . '/plug_in/usa_return_custom_cat_args.php');
include(get_template_directory() . '/plug_in/usa_return_custom_tag_args.php');

// カスタム投稿｜作成
include(get_template_directory() . '/plug_in/custom/post/works.php');

// カスタムフィールド
include(get_template_directory() . '/plug_in/custom/field/eyecatch_text.php');
include(get_template_directory() . '/plug_in/custom/field/meta_desc.php');
include(get_template_directory() . '/plug_in/custom/field/works_desc.php');
include(get_template_directory() . '/plug_in/custom/field/works_environment.php');

// コンテンツ関連
include(get_template_directory() . '/plug_in/content/usa_the_posts_pagination.php'); // ページネーションにクラス付与
include(get_template_directory() . '/plug_in/content/usa_post_has_archive.php'); // 投稿のアーカイブページを作成する
include(get_template_directory() . '/plug_in/content/usa_set_the_post_thumbnail.php'); //投稿のサムネイル自動設定
include(get_template_directory() . '/plug_in/content/usa_set_extra_sub_loop.php'); //別ページの一覧を表示する
include(get_template_directory() . '/plug_in/content/usa_set_heading_linear_show.php'); //タイトル表示
include(get_template_directory() . '/plug_in/content/usa_set_jump_btn_contents.php'); //ジャンプボタンの中身

// 管理画面
include(get_template_directory() . '/plug_in/manage/no_self_ping.php'); // セルフピンバックを除外する（内部リンクを貼ったときのコメント自動送信を防ぐ）
include(get_template_directory() . '/plug_in/manage/usa_theme_widgets_init.php'); // ウィジェットを表示する
include(get_template_directory() . '/plug_in/manage/usa_add_posts_columns_slug.php'); // 記事一覧にスラッグを表示する
include(get_template_directory() . '/plug_in/manage/usa_add_page_columns_slug.php'); // 固定ページ一覧にスラッグ追加
include(get_template_directory() . '/plug_in/manage/usa_original_block_categories.php'); // ブロックエディタにブロックカテゴリーを追加
include(get_template_directory() . '/plug_in/manage/usa_post_tag_checkbox.php'); //投稿のタグを選択式にする

// その他
include(get_template_directory() . '/plug_in/contact_form.php'); // contact form 7
include(get_template_directory() . '/plug_in/usa_meta_ogp.php'); // OGP画像
include(get_template_directory() . '/plug_in/usa_set_tax_terms_links.php'); //タクソノミーとタームのリンクを取得する
include(get_template_directory() . '/plug_in/usa_set_textarea_multiple_lines_data.php'); //カスタムフィールドの複数行の値（改行入力）をリストで出力する


function my_remove_meta_boxes() {
    remove_meta_box('authordiv', 'post', 'normal'); // オーサー
}
add_action('admin_menu', 'my_remove_meta_boxes');



//--------------------------------------------
// 【管理画面】ターム一覧にIDを表示
//--------------------------------------------
function add_term_columns($columns) {
    $index = 4; // IDの表示位置を指定
    return array_merge(
        array_slice($columns, 0, $index),
        array('id' => 'ID'),
        array_slice($columns, $index)
    );
}
add_filter('manage_edit-product_cat_columns', 'add_term_columns');
function add_term_custom_fields($deprecated, $column_name, $term_id) {
    if ($column_name == 'id') {
        echo $term_id;
    }
}
add_action('manage_product_cat_custom_column', 'add_term_custom_fields', 10, 3);
