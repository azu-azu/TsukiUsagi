<?php
$tag = 'p';
$type = 'main';
$url = '';

if (is_front_page() || is_home() || is_page('home')) {
  $title = "月うさぎBlog";
  $url = home_url('/');
} elseif (is_archive() && get_post_type() === 'works') {
  $title = "Works list";
  $url = home_url('/') . 'works';
} elseif (is_single()) {
  switch (get_post_type()) {
    case 'post':
      $title = "月うさぎBlog";
      $url = home_url('/');
      break;

    case 'works':
      $title = "Works";
      $url = home_url('/') . 'works';
      break;
  }
};

echo usa_set_heading_linear_show($tag, $title, $type, $url);
