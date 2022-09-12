<?php
/**
* Plugin Name: usa_set_textarea_multiple_lines_data
* Plugin URI: 
* Description: カスタムフィールドの複数行のフィールド（改行入力）の値をリストにして出力する
* Version: 1.0
* Author: tsukiusagi.biz
* Author URI: https://tsukiusagi.biz
* License: 
*
* @param string $my_name = カスタムフィールド名
* 
* 呼び出し例）echo usa_set_textarea_multiple_lines_data('my_page');
*
*/
function usa_set_textarea_multiple_lines_data( $my_name ) {
  if( post_custom ( $my_name ) ) {
    $html = '';
    $items = explode( "\n" , post_custom ( $my_name ));
    $items = preg_replace("/( |　)/", "", $items ); //余白除去

    $html = "<ul class='field-list'>";
    foreach ( $items as $value ) {
      if ( !$value == '') {
        $html .= "<li><p class='text'>".esc_html($value)."</p></li>";
      }
    }
    $html .= "</ul>";
    return $html;
  }
}
