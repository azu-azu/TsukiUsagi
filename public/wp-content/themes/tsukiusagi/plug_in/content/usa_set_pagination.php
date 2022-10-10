<?php

/**
 * Plugin Name: usa_set_pagination
 * Plugin URI:
 * Description: ページネーション設定
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 */


function usa_set_pagination() {
    global $wp_query;
    $big = 999999999;
    if ($wp_query->max_num_pages <= 1) {
        return;
    }
    $paged = get_query_var('paged') ? intval(get_query_var('paged')) : 1;
    $pagenum_link = html_entity_decode(get_pagenum_link());
    $query_args = array();
    $url_parts = explode('?', $pagenum_link);
    if (isset($url_parts[1])) {
        wp_parse_str($url_parts[1], $query_args);
    }
    $pagenum_link = remove_query_arg(array_keys($query_args), $pagenum_link);
    $pagenum_link = trailingslashit($pagenum_link) . '%_%';
    $format = $GLOBALS['wp_rewrite']->using_index_permalinks() && !strpos($pagenum_link, 'index.php') ? 'index.php/' : '';
    $format .= $GLOBALS['wp_rewrite']->using_permalinks() ? user_trailingslashit('page/%#%', 'paged') : '?paged=%#%';
    $translated = __('ページ番号', 'mytextdomain'); // Supply translatable string

    $page_links = paginate_links(array(
        'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
        'format' => $format,
        'total' => $GLOBALS['wp_query']->max_num_pages,
        'current' => $paged,
        'end_size' => 1,
        'mid_size' => 1,
        'prev_text' => '<i class="fas fa-angle-double-left"></i>',
        'next_text' => '<i class="fas fa-angle-double-right"></i>',
        'before_page_number' => '<span class="screen-reader-text">' . $translated . ' </span>',
        'type' => 'array',
    ));
?>

    <nav class="p-pagination">
        <ul class="c-pagination">
            <li class="">
                <?php echo join('</li><li>', $page_links); ?>
            </li>
        </ul>
    </nav>

<?php
}
