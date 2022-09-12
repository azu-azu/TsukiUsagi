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
      if (is_single() || is_archive() | is_page()) {
        body_class('c-bg--gradient-main');
      } else {
        body_class();
      }
      ?>>