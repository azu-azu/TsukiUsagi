<?php

/**
 * Plugin Name: usa_set_pagination
 * Plugin URI:
 * Description: ページネーション設定
 * Version: 2.0 updated:20250510
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */

function usa_set_pagination($custom_query = null) {
    // カスタムクエリ対応用： $query = new WP_Query(...) のときも、渡せばOKにする
    if ($custom_query === null) {
        global $wp_query;
        $custom_query = $wp_query;
    }

    if ($custom_query->max_num_pages <= 1) return;

    $paged = get_query_var('paged') ? intval(get_query_var('paged')) : 1;
    $translated = __('ページ番号', 'mytextdomain');

    $page_links = paginate_links(array(
        'base' => str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999))),
        'format' => '?paged=%#%',
        'total' => $custom_query->max_num_pages,
        'current' => $paged,
        'end_size' => 1,
        'mid_size' => 1,
        'prev_text' => '<i class="fas fa-angle-double-left"></i>',
        'next_text' => '<i class="fas fa-angle-double-right"></i>',
        'before_page_number' => '<span class="screen-reader-text">' . $translated . ' </span>',
        'type' => 'array',
    ));

    if (empty($page_links)) return;
?>

    <nav class="p-pagination">
        <ul class="c-pagination">
            <li>
                <?php echo join('</li><li>', $page_links); ?>
            </li>
        </ul>
    </nav>

<?php
}
