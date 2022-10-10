<?php

/**
 * Plugin Name: usa_make_link_button
 * Plugin URI:
 * Description: タイトル設定 c-linear-light, js-scroll-showを使用
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * @param string $my_title：題名
 * @param string $type：
 * @param string $url：アーカイブ一覧のurl(デフォルトは無し)
 *
 *
 */
function usa_make_link_button($my_title, $type, $url = "") {
?>
    <article class="c-read-more">
        <a class="" href="<?php echo $url; ?>">
            <?php echo $my_title; ?>
        </a>
    </article>
<?php
}
