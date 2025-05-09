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


function usa_admin_style() {
    wp_enqueue_style('usa-admin-style', get_template_directory_uri() . '/css/usa-admin-style.css');
}
add_action('admin_enqueue_scripts', 'usa_admin_style');




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
    if (is_front_page() || is_home() || is_page('home')) { // ブログフロント
        wp_enqueue_script('scrollAppear', get_template_directory_uri() . '/js/common/myScrollAnimAppear.js', array(), '', true);
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/common/myHamburger.js', array(), '', true);
        wp_enqueue_script('scroll-show', get_template_directory_uri() . '/js/parts/myScrollShow.js', array(), '', true);
        wp_enqueue_script('train', get_template_directory_uri() . '/js/common/myTrainFix.js', array(), '', true);

        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
        wp_enqueue_script('particles-min', get_template_directory_uri() . '/js/lib/particles.min.js', array(), '', true);

        wp_enqueue_script('milky-way', get_template_directory_uri() . '/js/parts/myMilkyWay.js', array(), 'particles-min', true);
        wp_enqueue_script('playing-box', get_template_directory_uri() . '/js/parts/myPlayingBox.js', array(), '', true);
        wp_enqueue_script('falling-box', get_template_directory_uri() . '/js/parts/myFallingBox.js', array(), '', true);
        wp_enqueue_script('sea-stars', get_template_directory_uri() . '/js/parts/mySeaStars.js', array(), 'particles-min', true); // 海の星
    }
    if (is_page('about')) { // プロフィール画面
        wp_enqueue_script('header', get_template_directory_uri() . '/js/common/myHeader.js', array(), '', true);
        wp_enqueue_script('train', get_template_directory_uri() . '/js/common/myTrainFix.js', array(), '', true);
        wp_enqueue_script('milky-way', get_template_directory_uri() . '/js/parts/myMilkyWay.js', array(), 'particles-min', true);

        wp_enqueue_script('swiper-bundle', '//unpkg.com/swiper/swiper-bundle.min.js', array(), '', true);
        wp_enqueue_script('swiper', get_template_directory_uri() . '/js/parts/mySwiper.js', array(), 'swiper-bundle', true);
        wp_enqueue_script('playing-box', get_template_directory_uri() . '/js/parts/myPlayingBox.js', array(), '', true);
        wp_enqueue_script('falling-box', get_template_directory_uri() . '/js/parts/myFallingBox.js', array(), '', true);
    }
    if (is_archive()) {
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/common/myHamburger.js', array(), '', true);

        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
        wp_enqueue_script('particles-min', get_template_directory_uri() . '/js/lib/particles.min.js', array(), '', true);
        wp_enqueue_script('falling-box', get_template_directory_uri() . '/js/parts/myFallingBox.js', array(), '', true);
        wp_enqueue_script('sea-stars', get_template_directory_uri() . '/js/parts/mySeaStars.js', array(), 'particles-min', true); // 海の星
    }
    if (is_single()) {
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/common/myHamburger.js', array(), '', true);

        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
        wp_enqueue_script('particles-min', get_template_directory_uri() . '/js/lib/particles.min.js', array(), '', true);
        wp_enqueue_script('sea-stars', get_template_directory_uri() . '/js/parts/mySeaStars.js', array(), 'particles-min', true); // 海の星
    }
    if (is_page()) { // 固定ページ共通
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/common/myHamburger.js', array(), '', true);
        wp_enqueue_script('scroll-show', get_template_directory_uri() . '/js/parts/myScrollShow.js', array(), '', true);
        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
        wp_enqueue_script('particles-min', get_template_directory_uri() . '/js/lib/particles.min.js', array(), '', true);
    }
    if (!is_page('about') && is_page()) {
        wp_enqueue_script('sea-stars', get_template_directory_uri() . '/js/parts/mySeaStars.js', array(), 'particles-min', true); // 海の星
    }
    if (is_page('policy')) {
        wp_enqueue_script('canvas-shooting-stars', get_template_directory_uri() . '/js/parts/myCanvasShootingStars.js', array(), '', true);
    }
    if (is_search()) {
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/common/myHamburger.js', array(), '', true);

        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
        wp_enqueue_script('particles-min', get_template_directory_uri() . '/js/lib/particles.min.js', array(), '', true);
        wp_enqueue_script('sea-stars', get_template_directory_uri() . '/js/parts/mySeaStars.js', array(), 'particles-min', true); // 海の星
    }
    if (is_404()) {
        wp_enqueue_script('hamburger', get_template_directory_uri() . '/js/common/myHamburger.js', array(), '', true);

        wp_enqueue_script('scroll-show', get_template_directory_uri() . '/js/parts/myScrollShow.js', array(), '', true);
        wp_enqueue_script('canvas-star-orbit', get_template_directory_uri() . '/js/parts/myStarOrbit.js', array(), '', true);
        wp_enqueue_script('splitting-min', 'https://unpkg.com/splitting@1.0.6/dist/splitting.min.js', array(), '', true); //data-splitting
        wp_enqueue_script('data-splitting', get_template_directory_uri() . '/js/lib/data-splitting.js', array(), 'splitting-min', true);
    }
    // wp_enqueue_style('anim-css', get_template_directory_uri() . '/css/anim.css', array(), date("YmdHi"), '');
}
add_action('wp_footer', 'file_load_scripts_styles'); // wp_footerに処理を登録


// カスタマイザー
// include(get_template_directory() . '/customizer/customizer.php');

/**
 * プラグイン
 */
include(get_template_directory() . '/plug_in/custom/setting/usa_return_custom_post_args.php');
include(get_template_directory() . '/plug_in/custom/setting/usa_return_custom_cat_args.php');
include(get_template_directory() . '/plug_in/custom/setting/usa_return_custom_tag_args.php');
include(get_template_directory() . '/plug_in/custom/setting/usa_create_custom_post.php'); // ※必ず上記３つより下に記述する

// カスタムフィールド
include(get_template_directory() . '/plug_in/custom/field/eyecatch_text.php');
include(get_template_directory() . '/plug_in/custom/field/meta_desc.php');
include(get_template_directory() . '/plug_in/custom/field/works_desc.php');
include(get_template_directory() . '/plug_in/custom/field/works_environment.php');

// コンテンツ関連
include(get_template_directory() . '/plug_in/content/usa_set_tax_terms_links.php'); // タクソノミーとタームのリンクを取得する
include(get_template_directory() . '/plug_in/content/usa_set_textarea_multiple_lines_data.php'); // カスタムフィールドの複数行の値（改行入力）をリストで出力する
include(get_template_directory() . '/plug_in/content/usa_post_has_archive.php'); // 投稿のアーカイブページを作成する
include(get_template_directory() . '/plug_in/content/usa_set_the_post_thumbnail.php'); // 投稿のサムネイル設定
include(get_template_directory() . '/plug_in/content/usa_set_extra_sub_loop.php'); // 投稿ループ表示
include(get_template_directory() . '/plug_in/content/usa_set_extra_sub_loop_post.php'); // 投稿ループ表示
include(get_template_directory() . '/plug_in/content/usa_set_extra_sub_loop_cat.php'); // カテゴリ別の投稿ループ表示
include(get_template_directory() . '/plug_in/content/usa_the_posts_pagination.php'); // ページネーションにクラス付与：既存関数を使う場合
include(get_template_directory() . '/plug_in/content/usa_set_pagination.php'); // 自作ページネーション
include(get_template_directory() . '/plug_in/content/usa_set_heading_linear_show.php'); // タイトル表示
include(get_template_directory() . '/plug_in/content/usa_set_jump_btn_contents.php'); // ジャンプボタンの中身
include(get_template_directory() . '/plug_in/content/usa_set_breadcrumb.php'); // パンくずリスト
include(get_template_directory() . '/plug_in/content/usa_make_link_button.php'); // リンクボタン
include(get_template_directory() . '/plug_in/content/usa_set_hide_on_current.php'); // currentにいる場合は非表示にする(例：メニューのカテゴリ別ページ)
// 管理
include(get_template_directory() . '/plug_in/manage/usa_remove_emoji.php'); // WordPress初期設定の絵文字を読み込む設定を停止
include(get_template_directory() . '/plug_in/manage/contact_form.php'); // contact form 7
include(get_template_directory() . '/plug_in/manage/usa_meta_ogp.php'); // OGP画像
include(get_template_directory() . '/plug_in/manage/no_self_ping.php'); // セルフピンバックを除外する（内部リンクを貼ったときのコメント自動送信を防ぐ）
include(get_template_directory() . '/plug_in/manage/usa_theme_widgets_init.php'); // ウィジェットを表示する
include(get_template_directory() . '/plug_in/manage/usa_original_block_categories.php'); // ブロックエディタにブロックカテゴリーを追加
include(get_template_directory() . '/plug_in/manage/usa_post_tag_checkbox.php'); // 投稿のタグを選択式にする
include(get_template_directory() . '/plug_in/manage/usa_add_tax_upload_image.php'); // カテゴリ画面に画像追加
include(get_template_directory() . '/plug_in/manage/usa_add_posts_columns_slug.php'); // 記事一覧にスラッグを表示する
include(get_template_directory() . '/plug_in/manage/usa_add_page_columns_slug.php'); // 固定ページ一覧にスラッグを表示する
include(get_template_directory() . '/plug_in/manage/usa_add_tax_columns.php'); // カテゴリ一覧にカラム追加
include(get_template_directory() . '/plug_in/manage/usa_set_post_views.php'); // 閲覧数の表示
include(get_template_directory() . '/plug_in/manage/usa_column_tags_sortable.php'); // タグを並び替えられる要素にする




add_filter('jetpack_implode_frontend_css', '__return_false');
add_action('wp_enqueue_scripts', 'dequeue_devicepx', 20);
function dequeue_devicepx() {
    wp_dequeue_script('devicepx');
}
