<?php
if (get_post_type() === 'post' && !is_post_type_archive('post')) {
  $url = esc_url(home_url('/')) . '/blog';
  $title = '月うさぎ';
  $html_tag = 'p';
} else {
  $url = esc_url(home_url('/'));
  $title = '月うさぎ';
  $html_tag = 'p';
}
?>

<a href="<?php echo $url; ?>" class="c-back-to-moon c-back-shadow--yellow">
  <<?php echo $html_tag; ?> data-splitting class="c-glitter-text c-back-to-moon__caption u-split-gap--title">
    <?php echo $title; ?>
  </<?php echo $html_tag; ?>>
</a>