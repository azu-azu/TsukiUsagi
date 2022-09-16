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
function usa_set_pagination($pages = '', $range = 2) {
    $showitems = ($range * 1) + 1; // 表示する数
    global $paged; // 現在のページ番号
    if (empty($paged)) $paged = 1;
    if ($pages == '') { // 総ページ数
        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if (!$pages) $pages = 1;
    };
?>

    <?php if ($pages != 1) { ?>
        <article class="p-pagination">
            <!-- <span class="c-pagination__page">page<?php echo $paged; ?>/<?php echo $pages; ?></span> -->
            <?php if ($paged > 1) { ?>
                <a class="c-pagination--pre c-bubbly-button--white" href="<?php echo get_pagenum_link($paged - 1); ?>">
                    <i class="fas fa-angle-double-left"></i>
                </a>
            <?php } ?>

            <ul class="c-pagination">
                <?php for ($i = 1; $i <= $pages; $i++) { ?>
                    <?php if (1 != $pages && (!($i >= $paged + $range + 1 || $i <= $paged - $range - 1) || $pages <= $showitems)) { ?>
                        <?php if ($paged == $i) { ?>
                            <li class="-current"><span><?php echo $i; ?></span></li>
                        <?php } else { ?>
                            <li><a class="c-bubbly-button--white" href="<?php echo get_pagenum_link($i); ?>"><span><?php echo $i; ?></span></a></li>
                        <?php } ?>
                    <?php } ?>
                <?php } ?>
            </ul>

            <?php if ($paged < $pages) { ?>
                <a class="c-pagination--next c-bubbly-button--white" href="<?php echo get_pagenum_link($paged + 1); ?>">
                    <i class="fas fa-angle-double-right"></i>
                </a>
            <?php } ?>
        </article>
    <?php } ?>
<?php
}
