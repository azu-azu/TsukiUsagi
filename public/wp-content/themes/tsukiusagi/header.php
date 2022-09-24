<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="<?php echo do_shortcode('[uri]'); ?>/img/svg/favicon.svg" type="image/svg+xml">
  <?php wp_head(); ?>
</head>

<body <?php
      if (is_page('about')) {
        body_class('p-about');
      } else {
        body_class('');
      }
      ?>>

  <?php
  if (is_page('about')) {
    get_template_part('components/header/about');
  } else {
    get_template_part('components/header/main');
  }
