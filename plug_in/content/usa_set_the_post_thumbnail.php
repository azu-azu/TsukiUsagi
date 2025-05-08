<?php

/**
 * Plugin Name: usa_set_the_post_thumbnail
 * Plugin URI:
 * Description: 投稿とアーカイブのサムネイル自動設定
 * Version: 1.0
 * Author: tsukiusagi.biz
 * Author URI: https://tsukiusagi.biz
 * License:
 *
 * @param string $size：画像の大きさ large/medium/small
 *
 */
function usa_set_the_post_thumbnail($size, $type) {
  global $post;

  // クラス名
  if ($type === 'main') {
    $class_container = "c-thumbnail";
  } elseif ($type === 'sub') {
    $class_container = "p-posts-list__figure c-thumbnail";
  }

  $class_link = "c-bg--white--opacity";
  $class_body = "p-posts-list__body";
  $class_title = "p-posts-list__title";

  // サムネイル
  $default_img_url = do_shortcode('[uri]') . '/img/thumbnail/default.png';
  $thumbnail_url = "";
  if (has_post_thumbnail()) {
    $thumbnail_url = get_the_post_thumbnail_url();
  } else {
    $thumbnail_url = $default_img_url;
  }

  // works以外
  if (!(get_post_type() === 'works')) {
    $cat = get_the_category($post->ID);
    $cat = $cat[0];
    $cat_data = get_option('cat_' . intval($cat->term_id));

    // 子カテゴリに画像がない場合は親カテゴリの画像を取得する
    if ($cat_data == false && $cat->parent !== 0) {
      $parent_id = $cat->category_parent;
      $parent = get_category($parent_id);
      $cat_data = get_option('cat_' . intval($parent->term_id));
    }

    // サムネイルなし＆カテゴリ画像がある場合
    if (!has_post_thumbnail() && $cat_data !== false) {
      $thumbnail_url = esc_html($cat_data['img']);
    };
  }

  // worksの場合 : 参照URLがあるかどうか判定
  if ((get_post_type() === 'works')) {
    if ($type === 'main') {
      $works_url = get_post_meta($post->ID, 'my_url', true);
      $target = 'target="_blank"';
    } else {
      $works_url = esc_url(get_permalink());
      $target = "";
    }
  };

  // thumbnailタグ
  $thumbnail = '<img src="' . $thumbnail_url . '" alt="サムネイル">';

  // 画像テキスト追加
  if (!(get_post_type() === 'works')) $thumbnail .= eyecatch_text_used();
?>

  <?php if (get_post_type() === 'post') : ?>
    <?php if ($type === 'sub') { ?>
      <a class="<?php echo $class_link; ?>" href="<?php echo esc_url(get_permalink()); ?>">
      <?php }; ?>

      <figure class="<?php echo $class_container; ?>">
        <?php echo $thumbnail; ?>
      </figure>

      <?php if ($type === 'sub') { ?>
        <div class="<?php echo $class_body; ?>">
          <div class="<?php echo $class_title; ?>"><?php the_title(); ?></div>
        </div>
      </a>
    <?php }; ?>


  <?php elseif (get_post_type() === 'works') : ?>
    <?php if ($works_url !== "") { ?>
      <a class="<?php echo $class_link; ?>" href="<?php echo $works_url; ?>" <?php echo $target; ?>>
      <?php }; ?>

      <figure class="<?php echo $class_container; ?>">
        <?php echo $thumbnail; ?>
        <?php if ($type === 'main' && $works_url !== "") { ?>
          <i class="fas fa-external-link-alt"></i>
        <?php }; ?>
      </figure>

      <?php if ($type === 'sub') { ?>
        <div class="<?php echo $class_body; ?>">
          <div class="<?php echo $class_title; ?>"><?php the_title(); ?></div>
        </div>
      <?php }; ?>

      <?php if ($works_url !== '') { ?>
      </a>
    <?php }; ?>
  <?php endif; ?>
<?php
}
