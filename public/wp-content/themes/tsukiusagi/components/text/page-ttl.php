<?php
$tag = 'p';
$type = 'page';

if (is_front_page() || is_home() || is_page('home')) {
  $title = "月うさぎBlog";
} elseif (get_post_type('works')) {
  $title = "Works list";
} elseif (is_single()) {
  switch (get_post_type()) {
    case 'post':
      $title = "月うさぎBlog";
      $type = "single";
      break;

    case 'works':
      $title = "Works";
      break;
  }
};

echo usa_set_heading_linear_show($tag, $title, $type);
