<?php
if (is_page('about')) {
  $url = esc_url(home_url('/')) . 'about';
  $title = '月うさぎＷｅｂ';
  $html_tag = 'p';
} else {
  $url = esc_url(home_url('/'));
  $title = '月うさぎＷｅｂ';
  $html_tag = 'p';
}
?>

<a href="<?php echo $url; ?>" class="c-back-to-moon c-ba-spread-light--yellow">
  <<?php echo $html_tag; ?> data-splitting class="c-glitter-text c-back-to-moon__caption u-split-gap--title">
    <?php echo $title; ?>
  </<?php echo $html_tag; ?>>
</a>