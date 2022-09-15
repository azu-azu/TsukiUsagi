<?php

/**
 * Plugin Name: usa_set_jump_btn_contents
 * Plugin URI:
 * Description: 「〇〇へジャンプ」ボタンの中身
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * @param string $text：'〇〇へ'（ジャンプするページ）
 * @param bool $bool：trueでc-fingerを入れる
 *
 * 呼び出し例）echo usa_set_jump_btn_contents('実績ページへ');
 *
 */
function usa_set_jump_btn_contents($text, bool $bool) {
    $splitting_class = '<p data-splitting class="c-circle-text">Click*here</p>';
    if ($bool === true) {
        $text_class = "text c-finger c-rabbit--2b";
    } else {
        $text_class = "text c-rabbit--2b";
    }

    echo '<div class="c-ball c-glass--bright">';
    echo $splitting_class;
    echo $splitting_class;
    echo '</div>';
    echo '<p class="' . $text_class . '">' . $text . '<span class="jump">ジャンプ</span></p>';
}
