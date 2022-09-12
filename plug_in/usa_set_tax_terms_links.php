<?php
/**
* Plugin Name: usa_set_tax_terms_links
* Plugin URI: 
* Description: タクソノミーとタームのリンクを取得する（引数でh2追加）
* Version: 1.0
* Author: tsukiusagi.biz
* Author URI: https://tsukiusagi.biz
* License: 
*
* @param string $my_name : 該当のタクソノミースラッグ名
* @param string $bool    : trueでh2出力/falseでh2無し
*
* 呼び出し例）echo usa_set_tax_terms_links('works-tag', true);
* 
*/
function usa_set_tax_terms_links($my_name, bool $bool){
    global $post;
    $id = $post->id;
    $post = get_post( $id );// 投稿 ID から投稿オブジェクトを取得
    $post_type = $post->post_type;// その投稿から投稿タイプを取得
    $taxonomies = get_object_taxonomies( $post_type, 'objects' );// その投稿タイプからタクソノミーを取得

    $out = array();
    foreach ( $taxonomies as $taxonomy_slug => $taxonomy ){
    $terms = get_the_terms( $post->ID, $taxonomy_slug );// 投稿に付けられたタームを取得
    $name = $taxonomy_slug;

    if ( !empty( $terms ) && $name == $my_name ) {
        if ($bool == true) {
            $out[] = "<h2>" . $taxonomy->label . "</h2>\n<ul class='$my_name-list field-list'>";
        } else {
            $out[] = "<ul class='$my_name-list field-list'>";
        }
        foreach ( $terms as $term ) {
            $out[] =
                '  <li><a class="text" href="'
                .    get_term_link( $term->slug, $taxonomy_slug ) .'">'
                .    $term->name
                . "</a></li>\n";
                }
            $out[] = "</ul>\n";
        }
    }
    return implode('', $out );
}