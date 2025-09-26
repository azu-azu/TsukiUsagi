<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="<?php echo do_shortcode('[uri]'); ?>/img/svg/favicon.svg" type="image/svg+xml">
  <?php wp_head(); ?>
</head>

<?php
if (is_page('about')) {
  $body_class = 'p-about c-overlay';
} elseif (is_front_page() || is_home() || is_page('home')) {
  $body_class = 'c-overlay c-bg--gradient-main';
} else {
  $body_class = 'c-overlay';
}
?>

<body <?php body_class($body_class); ?>>
  <?php
  if (is_front_page() || is_home() || is_page('home')) {
    get_template_part('components/header/front');
  } else {
    get_template_part('components/header/main');
  }
  ?>
