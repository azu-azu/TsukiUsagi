<?php

/**
 * Plugin Name: usa_set_heading_linear_show
 * Plugin URI:
 * Description: タイトル設定 c-linear-light, js-scroll-showを使用
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * @param string $heading_num：heading_number（h1/h2）
 * @param string $my_title：題名
 * @param string $type：page/sec/list（ページタイトル/セクションタイトル/リストタイトル）
 * @param string $url：アーカイブ一覧のurl(デフォルトは無し)
 *
 * 呼び出し例）echo usa_set_heading_linear_show('h2', 'Contact', 'sec');
 *
 */
function usa_set_heading_linear_show($heading_num, $my_title, $type, $url = "") {
    switch ($type) {
        case 'main':
            $pseudo = 'c-title--main';
            break;

        case 'post':
            if (get_post_type() === 'post') {
                $pseudo = 'c-title--post--black c-pseudo--sec-ttl';
            } else {
                $pseudo = 'c-title--post c-text-shadow--white c-pseudo--sec-ttl';
            }
            break;

        case 'sec':
            $pseudo = 'c-title--section c-text-shadow--white c-pseudo--sec-ttl c-anim-box--down js-scroll-show';
            break;

        case 'list':
            $pseudo = 'c-title--section c-text-shadow--black c-pseudo--list-ttl';
            break;

        case 'inline':
            $pseudo = 'c-title--section--' . $type . ' c-text-shadow--white c-pseudo--sec-ttl';
            break;
    }
?>
    <div class="p-title--<?php echo $type; ?>">
        <?php if (!$url == "") : ?>
            <a class="" href="<?php echo $url; ?>">
            <?php endif; ?>

            <<?php echo $heading_num; ?> class="<?php echo $pseudo; ?>">
                <?php echo $my_title; ?>
            </<?php echo $heading_num; ?>>

            <?php if (!$url == "") : ?>
            </a>
        <?php endif; ?>
    </div>
<?php
}
